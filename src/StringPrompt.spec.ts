import { StringPrompt } from './StringPrompt'
import { testIO } from './testutils'

describe('options.initial', () => {
  it('should use options.initial when submitted without changes', async () => {
    const io = testIO()
    const prompt = new StringPrompt({ message: 'foo', initial: 'init-value' })

    prompt.once('run', () => io.enter())
    setImmediate(() => prompt.submit())
    const value = await prompt.run()

    expect(value).toBe('init-value')
  })
})
