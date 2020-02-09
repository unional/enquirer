import { stdio } from 'stdio-mock'
import { StringPrompt } from './StringPrompt'

describe('options.initial', () => {
  it('should use options.initial when submitted without changes', async () => {
    // TODO: use `mocktomata` with `@mocktomata/plugin-node` to simulate stdio
    const { stdin, stdout } = stdio()
    const prompt = new StringPrompt({ stdin, stdout, message: 'foo', initial: 'init-value' })

    const value = await prompt.run()

    expect(value).toBe('init-value')
  })
})
