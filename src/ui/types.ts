export type KeyPress = string | Buffer | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type KeyEvent = {
  name: string,
  ctrl: boolean,
  meta: boolean,
  shift: boolean,
  option: boolean,
  sequence: KeyPress,
  raw: KeyPress,
  code: string
}
