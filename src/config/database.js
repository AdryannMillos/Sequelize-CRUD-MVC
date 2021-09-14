module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Titanio123',
    database: 'Kurz',
    define: {
        timestamps: true, // created_at and updated_at
        underscored: true // this_format with_underscore
    },

};