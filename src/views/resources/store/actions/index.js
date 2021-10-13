import axios from 'axios'

// ** Get data
export const getData = params => {
  return dispatch => {
    axios.get('/api/resources/agent/data', params).then(response => {
console.log(response);
      dispatch({
        type: 'GET_DATA',
        allData: response.data.agents,
        data: response.data.agents,
        // totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Delete Invoice
export const deleteInvoice = id => {
  return (dispatch, getStore) => {
    axios
      .delete('/apps/invoice/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_INVOICE'
        })
      })
      .then(() => dispatch(getData(getStore().invoice.params)))
  }
}
