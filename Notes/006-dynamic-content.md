# Dynamic Content serving

**Sharing data**
An object that is exported can be accessed by all node modules. 

## Templating Engine
- htmlish template, it replaces placeholders are replaced by node variable values
- EJS, PUG, HANDLEBARS  
- install all engines
    npm i pug ejs express-pug --save
## pug
    - pug is built in into express but handlebars is not and thus it is imported and passed in the .engine(...)
    we can configure express app to accept the view engine.
    - we can set global config variable and values using:
        app.set('key','value');
    - there are certain preset variables so express can detect the view engine. see documentation
        app.set('view engine','pug');
        app.set('views','views'); // views is in views folder
### pug syntax
    - it uses indentation instead of html tags
    - in .pug file
```pug
    html(lang="en")
        head
            title
        body
            header.main-header // main-header class
            a.active("href="/", others="xxx") Shop // <a href="/>Shop</a>
            article.card.product-item // 2 classes
            //loop
            each product in product_array
                #{product.title}
                #{product.image}
            if products.length >0
                // some pug component

```

    - instead of using response.send() we use response.render("name of pug file to render")
     - **dynamic pug template**
     - add an object containg the values we want to transfer into the template.
        products = ['a','b','c']
        res.render('shop', {prod: products, title: 'title'})
    - #{shop} - shows array of products
    - #{title}

### Pug layouts 
    - To minimize code repetition we can define a common layout and we can extend that layout and change content 
    - example
    - in file main.pug
```pug
html
    head
        title Products
    body
        header // some header here
        block content // will be replaced by other content
```    
    - in file add-product.pug
```pug
extends ../main.pug

block content
    div hello world // other content that replaces the block in main.pug
```

**dynamically set a css class based on the path the view is loaded for**
    - pass a path attribuite in the model of the .render : res.render(..., {..., path: "abc/ jik"})
    - then add a javascript code in the .pug file
    - a(href="/", class=(path === "abc/jik" ? "active": ""))

## Handlebars
    - install handlebars
    - app.engine('hbs', expresshbs())
    - app.set('view engine','hbs') 
    - app.set('views', 'pages')
    - 'hbs' will be used as an extension for the handlebars files
    - see the documentation for the rest
    - its almost the same as pug