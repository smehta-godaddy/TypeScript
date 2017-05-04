// @target: es2017
// @jsx: react
// @moduleResolution: node
// @libFiles: react.d.ts,lib.d.ts

// @filename: declaration.d.ts
declare module "classnames";

// @filename: 0.tsx
///<reference path="declaration.d.ts" />
import * as cx from 'classnames';
import * as React from "react";

let buttonProps : {[attributeName: string]: ''}
let k = <button {...buttonProps} className={cx('class1', { class2: true })} />;