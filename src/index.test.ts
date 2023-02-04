import { isBrowser, isServer, isWebWorker } from './index'

it('works in CommonJS too', () => {
  const { isServer } = require('./index')
  expect(isServer()).toStrictEqual(true)
})

it('reports false for isBrowser', () => {
  expect(isBrowser()).toStrictEqual(false)
})

it('reports true for isServer', () => {
  expect(isServer()).toStrictEqual(true)
})

it('reports false for isWebWorker', () => {
  expect(isWebWorker()).toStrictEqual(false)
})

it('reports isBrowser true in browser environemnt (simulated)', async () => {
  require('global-jsdom/register')
  expect(isBrowser()).toStrictEqual(true)
})

it('reports isWebWorker true in webworker environemnt (simulated)', async () => {
  require('global-jsdom/register')
  window.constructor = function DedicatedWorkerGlobalScope() {}
  expect(isWebWorker()).toStrictEqual(true)
})

it('reports true for isServer when window is there, but document is not (some SSR environments)', () => {
  ;(globalThis as any).window = {}
  expect(isServer()).toStrictEqual(true)
})

it('handles the described runtime check for JSDOM correctly', async () => {
  require('global-jsdom/register')
  expect(navigator.userAgent.includes('jsdom')).toStrictEqual(true)
})
