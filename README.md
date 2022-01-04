# modules
Play with JavaScript CommonJS and ECMA modules.


Having the import() function in CommonJS modules allows us to use ES6 modules. But it comes with a big caveat, and that is that both import and import() are asynchronous operations. If you think about it, require() is a synchronous operation since it does not return until the module fully loads. However import() returns a Promise, and some time in the future either the module will load or an error will be thrown.
