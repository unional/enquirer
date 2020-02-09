import { EventEmitter } from 'events'

export abstract class Prompt<V, A> extends EventEmitter {
  private stdout: NodeJS.WriteStream
  private stdin: NodeJS.ReadStream
  private value: V | undefined
  constructor(private options: Prompt.Options<V, A>) {
    super()
    this.stdin = options.stdin || process.stdin
    this.stdout = options.stdout || process.stdout
  }

  async run() {
    if (await this.shouldSkip()) {
      return
    }

    await this.initialize()

    return new Promise<A>((a, r) => {
      this.once('submit', a)
      this.once('cancel', r)

      this.start()
      this.render()
    })
  }

  private async shouldSkip() {
    return false
  }
  private async initialize() {
    this.value = await this.getValue(this.options.initial)
  }
  private start() { }

  protected render() {
    throw new Error('expected prompt to have a custom render method');
  }

  private async getValue(value: any) {
    if (value === undefined) return value
    if (typeof value === 'function') {
      return await value.call(this, this)
    }
  }
}

export namespace Prompt {
  export type Options<V, A> = {
    message: string,
    initial?: Initializer<V, A>,
    stdout?: NodeJS.WriteStream,
    stdin?: NodeJS.ReadStream,
  }

  export type Initializer<V, A> = V | ((this: Prompt<V, A>, prompt: Prompt<V, A>) => V | Promise<V>)
}
