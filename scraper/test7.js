const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const got = require('got')
const request = require('request')

const FormData = require('form-data')
const { fromBuffer } = require('file-type')
const { default: Axios } = require('axios')
const fs = require('fs')
const chalk = require('chalk')

function rexdl(link) {
  return new Promise((resolve) => {
    axios.get(link).then(({ data }) => {
      const $ = cheerio.load(data)
      const link = []
      const url = []
      const link_name = []
      const judul = $('#page > div > div > div > section > div:nth-child(2) > article > div > h1.post-title').text()
      const plink = $('#page > div > div > div > section > div:nth-child(2) > center:nth-child(3) > h2 > span > a').attr('href')
      axios.get(plink).then(({ data }) => {
        const $$ = cheerio.load(data)
        $$('#dlbox > ul.dl > a > li > span').each(function (a, b) {
          deta = $$(b).text()
          link_name.push(deta)
        })
        $$('#dlbox > ul.dl > a').each(function (a, b) {
          url.push($$(b).attr('href'))
        })
        for (let i = 0; i < link_name.length; i++) {
          link.push({
            link_name: link_name[i],
            url: url[i],
          })
        }
        resolve({
          status: true,
          creator: 'sanuwa',
          title: judul,
          update_date: $$('#dlbox > ul.dl-list > li.dl-update > span:nth-child(2)').text(),
          version: $$('#dlbox > ul.dl-list > li.dl-version > span:nth-child(2)').text(),
          size: $$('#dlbox > ul.dl-list > li.dl-size > span:nth-child(2)').text(),
          download: link,
        })
      })
    })
  })
}
module.exports = rexdl;
