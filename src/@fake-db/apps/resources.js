import mock from '../mock'
import { paginateArray, sortCompare } from '../utils'

const data = {
  resources: [
	    {
	      id: 4987,
	      issuedDate: '13 Dec 2019',
	      client: {
	        address: '7777 Mendez Plains',
	        company: 'Hall-Robbins PLC',
	        companyEmail: 'don85@johnson.com',
	        country: 'USA',
	        contact: '(616) 865-4180',
	        name: 'Jordan Stevenson'
	      },
	      service: 'Software Development',
	      total: 3428,
	      avatar: '',
	      invoiceStatus: 'Paid',
	      balance: '$724',
	      dueDate: '23 Apr 2019'
	    }
  	]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/apps/resource/resources').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, status = null } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.resources
    .filter(
      invoice =>
        /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
        (invoice.client.companyEmail.toLowerCase().includes(queryLowered) ||
          invoice.client.name.toLowerCase().includes(queryLowered)) &&
        invoice.invoiceStatus.toLowerCase() === (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
    )
    .sort(sortCompare('id'))
    .reverse()
  /* eslint-enable  */

  return [
    200,
    {
      allData: data.resources,
      resources: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
