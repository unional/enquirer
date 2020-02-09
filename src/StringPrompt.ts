import { Prompt } from './Prompt';

export class StringPrompt extends Prompt<string, string> {
  constructor(options: any) {
    super(options)
  }
  protected render() { }
}
