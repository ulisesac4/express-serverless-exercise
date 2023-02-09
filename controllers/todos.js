/**
 * @module Boletus/controller
 * @description Este modulo ofrece la administración de boletas de votantes
 */
const TodosService = require("../services/todos");

module.exports = {
  /**
    * @description Este endpoint crea una boleta de votos.
    * ```
    * "boletus": "{id: 1,
           uuid: '48f344fd-c808-4e74-a934-609d9c61ff3f',
           name: 'worksheet 1',
           updatedAt: 2020-11-27T22:17:11.030Z,
           createdAt: 2020-11-27T22:17:11.011Z,
           deletedAt: null,
           CandidatePositionId: 1,
           ElectionId: 1
 }"
    * ```
    * @path {POST} /api/boletus/create
    * @body boletusData {Obj} Objeto con la propiedad `name` de la boleta
    * @body candidates {Array} Un array con los uuid de los candidatos, estos son uuid de la tabla Employee
    * @body electionUuid {Uuid} El uuid de la eleccion a la que pertenece esta eleccion
    * @body candidatePositionUuid {Uuid} El uuid de la posicion de esta boleta a tomar
    */
  create: async (req, res) => {},
  /**
   * @description Este endpoint elimina una boleta de votos
   * ```
   * "boletusUuid": "un uuid cualquiera"
   * ```
   * @path {POST} /api/boletus/delete
   * @body boletusUuid {String} El uuid de la boleta para eliminar
   */
  destroy: async (req, res) => {},
  /**
    * @description Este endpoint Muestra los detalles de una boleta de votos, la votacion a la que pertenece
    * la posicion a la que aspira y los datos de los participantes de esta boleta.
    * ```
    * "boletus": "{
    "id":1,
    "uuid":"15acbb4b-2228-4a9d-92c9-7a78c9b1eec1",
    "name":"worksheet 1",
    "createdAt":"2020-11-27T22:32:55.168Z",
    "updatedAt":"2020-11-27T22:32:55.186Z",
    "deletedAt":null,
    "CandidatePositionId":1,
    "ElectionId":1,
    "Candidates":[
       {
          "id":2,
          "uuid":"d78ade14-f723-4df0-a362-7c256ed4425f",
          "createdAt":"2020-11-27T22:32:55.151Z",
          "updatedAt":"2020-11-27T22:32:55.179Z",
          "deletedAt":null,
          "BoletusId":null,
          "boletusId":1,
          "ElectionId":1,
          "EmployeeId":12,
          "CandidatePositionId":null,
          "Employee":{
             "id":12,
             "uuid":"c64ac151-eb62-4ec1-b3dc-92b284f5e2cb",
             "payroll":"0076",
             "job":"OPERADOR DE ACABADO",
             "daySalary":"260",
             "entry":"2018-10-29",
             "address":"",
             "createdAt":"2020-11-27T22:32:02.672Z",
             "updatedAt":"2020-11-27T22:32:02.681Z",
             "deletedAt":null,
             "CityId":1,
             "CompanyId":9,
             "ElectionId":null,
             "UserId":241,
             "LocalplaceId":3,
             "User":{
                "id":241,
                "uuid":"a972631b-c3a2-43b7-906d-20c8d647e855",
                "email":"AUAA981026PV5",
                "pass":"$2b$10$ywg9f3EimQ2iV26pkdoMH.gc0dNwMNEMv4vfGDC5XgV5TMRZ6v49W",
                "userType":63974,
                "createdAt":"2020-11-27T22:32:02.603Z",
                "updatedAt":"2020-11-27T22:32:02.603Z",
                "deletedAt":null,
                "HeadquarterId":null,
                "UserProfile":{
                   "id":241,
                   "uuid":"84a9f010-49c1-43f5-b119-6e5ea2aaba5f",
                   "name":"ANGEL FERMIN AGUIRRE ALONSO",
                   "lastNames":"",
                   "dateOfBirth":"1998-10-26",
                   "sex":"HOMBRE",
                   "rfc":"AUAA981026PV5",
                   "personalPhone":"",
                   "mobilePhone":"",
                   "nss":"1139847048",
                   "charge":null,
                   "address":null,
                   "otherMail":null,
                   "createdAt":"2020-11-27T22:32:02.667Z",
                   "updatedAt":"2020-11-27T22:32:02.668Z",
                   "deletedAt":null,
                   "UserId":241
                }
             }
          }
       },
       {
          "id":1,
          "uuid":"082985ae-bc43-47a6-8743-2baf34b2de27",
          "createdAt":"2020-11-27T22:32:55.148Z",
          "updatedAt":"2020-11-27T22:32:55.179Z",
          "deletedAt":null,
          "BoletusId":null,
          "boletusId":1,
          "ElectionId":1,
          "EmployeeId":12,
          "CandidatePositionId":null,
          "Employee":{
             "id":12,
             "uuid":"c64ac151-eb62-4ec1-b3dc-92b284f5e2cb",
             "payroll":"0076",
             "job":"OPERADOR DE ACABADO",
             "daySalary":"260",
             "entry":"2018-10-29",
             "address":"",
             "createdAt":"2020-11-27T22:32:02.672Z",
             "updatedAt":"2020-11-27T22:32:02.681Z",
             "deletedAt":null,
             "CityId":1,
             "CompanyId":9,
             "ElectionId":null,
             "UserId":241,
             "LocalplaceId":3,
             "User":{
                "id":241,
                "uuid":"a972631b-c3a2-43b7-906d-20c8d647e855",
                "email":"AUAA981026PV5",
                "pass":"$2b$10$ywg9f3EimQ2iV26pkdoMH.gc0dNwMNEMv4vfGDC5XgV5TMRZ6v49W",
                "userType":63974,
                "createdAt":"2020-11-27T22:32:02.603Z",
                "updatedAt":"2020-11-27T22:32:02.603Z",
                "deletedAt":null,
                "HeadquarterId":null,
                "UserProfile":{
                   "id":241,
                   "uuid":"84a9f010-49c1-43f5-b119-6e5ea2aaba5f",
                   "name":"ANGEL FERMIN AGUIRRE ALONSO",
                   "lastNames":"",
                   "dateOfBirth":"1998-10-26",
                   "sex":"HOMBRE",
                   "rfc":"AUAA981026PV5",
                   "personalPhone":"",
                   "mobilePhone":"",
                   "nss":"1139847048",
                   "charge":null,
                   "address":null,
                   "otherMail":null,
                   "createdAt":"2020-11-27T22:32:02.667Z",
                   "updatedAt":"2020-11-27T22:32:02.668Z",
                   "deletedAt":null,
                   "UserId":241
                }
             }
          }
       }
    ],
    "Election":{
       "id":1,
       "uuid":"59ef2e95-d1a2-4b48-9340-e2123b1caa6b",
       "name":"one election",
       "createdAt":"2020-11-27T22:32:55.122Z",
       "updatedAt":"2020-11-27T22:32:55.122Z",
       "deletedAt":null
    },
    "CandidatePosition":{
       "id":1,
       "uuid":"36b77e1f-48ae-4cf1-9fac-816e173f0557",
       "name":"pos 1",
       "createdAt":"2020-11-27T22:32:55.127Z",
       "updatedAt":"2020-11-27T22:32:55.127Z",
       "ElectionId":null
    }
 }"
    * ```
    * @path {POST} /api/boletus/show
    * @body boletus {String} El uuid de la boleta a mostrar
    */
  show: async (req, res) => {},
  /**
    * @description Este endpoint enlista todas las boletas que una votacion tiene. Para consultar
    * los detalles especificos revisar con el endpoint show.
    * ```
    * "boletuses": "[{
             id: 1,
             uuid: 'd82f389e-9159-41d8-b666-de03bb7e460c',
             name: 'worksheet 1',
             createdAt: 2020-11-27T22:37:22.396Z,
             updatedAt: 2020-11-27T22:37:22.416Z,
             deletedAt: null,
             CandidatePositionId: 1,
             ElectionId: 1
           }]"
    * ```
    * @path {POST} /api/boletus/showall
    * @body electionUuid {String} El uuid de la eleccion para mostrar
    */
  showAll: async (req, res) => {},
  /**
   * @description Este endpoint actualiza todos los detalles de una boleta. Sus datos generales,
   * los candidatos participantes y la posicion a la que aspira.
   * ```
   * "boletusUuid": "Un uuid cualquiera"
   * ```
   * @path {POST} /api/boletus/update
   * @body boletusData {Obj} Objeto con la propiedad `name` de la boleta
   * @body boletusUuid {Uuuid} El identificador de la boleta a actualizar
   * @body candidates {Array} Un array con los uuid de los candidatos, estos son uuid de la tabla Employee
   * @body candidatePositionUuid {Uuid} El uuid de la posicion de esta boleta a tomar
   */
  update: async (req, res) => {},
};
