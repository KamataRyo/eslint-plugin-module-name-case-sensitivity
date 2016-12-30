import { RuleTester } from 'eslint'
import rule from '../../../src/lib/rules/no-uppercase'

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } })

ruleTester.run('no-uppercase', rule, {

  valid: [
    'var module = require("eslint")',
    'import eslint from "eslint"',
    'var module = require("../Something.js")',
    'var module = require("./path/to/Something.js")'
  ],

  invalid: [
    {
      code: 'var module = require("ESLint")',
      errors: [ { message: 'invalid uppercase.' } ]
    },
    {
      code: 'import ESLint from "ESLint"',
      errors: [ { message: 'invalid uppercase.' } ]
    }
  ]

})
