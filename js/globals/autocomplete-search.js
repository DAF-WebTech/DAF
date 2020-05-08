// Funnelback autocomplete 

jQuery(document).ready( function() {

    // Query completion setup.
    jQuery(".header__search__global-search-box").fbcompletion({
      'enabled'    : 'enabled',
      'standardCompletionEnabled': true,
      'collection' : 'daff',
      'program'    : 'https://deedi-search.clients.squiz.net/s/suggest.json',
      'interactionLog'  : 'https://deedi-search.clients.squiz.net/s/log',
      'format'     : 'extended',
      'alpha'      : '.5',
      'show'       : '10',
      'sort'       : '0',
      'length'     : '3',
      'logging'    : 'disabled',
      'delay'      : '0',
      'profile'    : '',
      'query'      : 'collection=daff',
      //Search based completion
      'searchBasedCompletionEnabled': false,
      'searchBasedCompletionProgram': 'https://deedi-search.clients.squiz.net/s/suggest.json',
    });

  });
