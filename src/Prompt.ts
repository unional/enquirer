import { EventEmitter } from 'events'

export abstract class Prompt<V, A> extends EventEmitter {
  // private io: IO
  private answer: A | undefined
  constructor(private options: Prompt.Options<V, A>) {
    super()

    // this.io = options.io || nodeIO
  }
  async submit() {
    this.emit('submit')
  }
  async run() {
    if (await this.shouldSkip()) return

    await this.initialize()

    return new Promise<A>((a, r) => {
      this.once('submit', () => a(this.answer))
      this.once('cancel', r)

      this.start()
      this.render()
      this.emit('run')
    })
  }

  private async shouldSkip() {
    return false
  }
  private async initialize() {
    // TODO: setting answer as initial only applies to some prompts
    this.answer = await this.getValue(this.options.initial)
  }
  private start() { }

  protected abstract render(): void

  private async getValue(value: any) {
    if (value === undefined) return value
    if (typeof value === 'function') {
      return await value.call(this, this)
    }
    return value
  }
}

export namespace Prompt {
  export type Options<V, A> = {
    message: string,
    initial?: Initializer<V, A>,
    stdin?: NodeJS.ReadStream,
    stdout?: NodeJS.WriteStream,
  }

  export type Initializer<V, A> = V | ((this: Prompt<V, A>) => V | Promise<V>)
}
