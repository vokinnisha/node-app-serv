const express = require( 'express' );
const router = express.Router();
const dataMethod = require( '../public/modules/dataMethod.js' );


router.get( "/api/v1", ( req, res ) => {
    console.log( 'подключился через роутер' );

    res.send( `<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>подключился через router</h1>
<p>This is a paragraph.</p>

</body>
</html>`);
} );

///user?lastname={lastname}&firstname={firstname}&age={age}&page={page}&size={size}
router.get( `/api/v1/persons/:id`, async ( req, res ) => {
    const { id } = req.params;
    try {
        let result = await new dataMethod().getPerson( id );
        res.send( result );
    } catch ( error ) {
        res.status( 503 ).send( error.original.code );
    }

} );

router.post( "/api/v1/person", async ( req, res ) => {
    // console.log( res );
    const { lastname, firstname, age } = req.body;
    res.send( 200 );

    await new dataMethod().postPerson( lastname, firstname, age );
} );

module.exports = router;