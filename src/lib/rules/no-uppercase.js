//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default {
  meta: {
    docs: {
      description: '',
      category: 'Possible Errors',
      recommended: true
    },
    fixable: 'code',
    schema: [] // no options
  },

  create: function(context) {
    console.log(context)
    return {
        // callback functions
    }
  }
}
