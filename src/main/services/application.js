import { create, getPath } from './window';

export function init() {
  const win = create({ width: 1000, height: 800 });
  win.loadURL(getPath());
}
