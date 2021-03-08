import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import * as fs from 'fs'

import { CddaData } from './data'

import Thing from './Thing.svelte';

const json = JSON.parse(fs.readFileSync(__dirname + '/../_test/all.json', 'utf8'))
let data: CddaData = new CddaData(json.data)
for (const item of data.byType('skill')) {
  if (item.id)
    test(`render skill ${item.id}`, () => {
      render(Thing, { item: { type: 'skill', id: item.id}, data })
    })
}