const db = require( '../../models/dataBase.js' );

class DataBase {
    constructor () {

    }

    getPerson ( id ) {
        let user = db.Users.findOne( {
            where: {
                id
            }
        } );
        if ( user ) {
            return user;
        } else {
            db.Sequelize.authenticate().catch( err => console.log( err ) );
        }
    }

    getPersons () {
        db.Users.findAll( {
            // attributes: [ 'firstname', 'lastname', 'order_by' ], выбор аттрибутов, которые хочу видеть
            // tyt нужно накинуть квери параметры
            where: {
                order_by: 5
            }
        } );
    }

    postPerson ( lastname, firstname, age ) {
        db.Users.create( {
            id: 7,
            lastname,
            firstname,
            age
        } );
        console.log( db.Users === db.Sequelize.models.person );
    }

    updatePerson () {

        db.Users.update( {
            firstname: 'Сергей'
        }, {
            where: {
                id: 1
            }
        } );
    }

    deletePerson () {

        db.Users.destroy( {
            where: {
                id: 2
            }
        } );
    }
}

module.exports = DataBase



