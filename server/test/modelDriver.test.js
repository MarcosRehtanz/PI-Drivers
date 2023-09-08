const { DataTypes } = require('sequelize')
const { Driver } = require('../src/db');
const attributes = Driver.getAttributes();

describe('Test to Driver model', () => {

    test('Model is defined', () => {
        expect(Driver).toBeDefined();
    })

    describe(`The model's Attributes to be defined`, () => {
        test('ID', () => {
            expect(attributes.id).toBeDefined()
        })
        test('Name', () => {
            expect(attributes.name).toBeDefined()
        })
        test('Surname', () => {
            expect(attributes.surname).toBeDefined()
        })
        test('Description', () => {
            expect(attributes.description).toBeDefined()
        })
        test('DOB', () => {
            expect(attributes.birthdate).toBeDefined()
        })
        test('Image', () => {
            expect(attributes.birthdate).toBeDefined()
        })
        test('Nationality', () => {
            expect(attributes.nationality).toBeDefined()
        })
    })

    describe(`The model's Attributes has de correct configuration`, () => {

        test('ID', () => {
            expect(attributes.id.type instanceof DataTypes.UUID).toBe(true)
            expect(attributes.id.primaryKey).toBe(true)
        })
        test('Name', () => {
            expect(attributes.name.type instanceof DataTypes.STRING).toBe(true)
            expect(attributes.name.allowNull).toBe(false)
        })
        test('Surname', () => {
            expect(attributes.surname.type instanceof DataTypes.STRING).toBe(true)
            expect(attributes.surname.allowNull).toBe(false)
        })
        test('Description', () => {
            expect(attributes.description.type instanceof DataTypes.TEXT).toBe(true)
            expect(attributes.description.allowNull).toBe(false)
        })
        test('DOB', () => {
            expect(attributes.birthdate.type instanceof DataTypes.DATEONLY).toBe(true)
            expect(attributes.birthdate.allowNull).toBe(false)
        })
        test('Image', () => {
            expect(attributes.image.type instanceof DataTypes.TEXT).toBe(true)
            expect(attributes.image.allowNull).toBe(false)
        })
        test('Nationality', () => {
            expect(attributes.nationality.type instanceof DataTypes.STRING).toBe(true)
            expect(attributes.nationality.allowNull).toBe(false)
        })

    })
})