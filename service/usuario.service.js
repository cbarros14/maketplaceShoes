// Importações
const Usuario = require('../model/Usuario');


const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findAllUsersService = (limit, offset) => {
    return Usuario.find();
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
};

const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id, 
        },

        {
             $push: {
                enderecos: endereco,
            }

        },
        {
            rawResult: true,
        }
    );
};

const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id, 
        },
        {
            // Remove endereço
            $pull: {
                enderecos: {
                    _id: addressId
                }
            }

        },
        {
            rawResult: true, 
        }
    );
};

const addUserFavProductService= (id, produto) => {
    console.log(produto)
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                produtos_fav: {
                    _id: produto._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}

const removeUserFavProductService= (id, produto) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                produtos_fav: {
                    _id: produto._id,
                },
            },
        },
        {
            rawResult: true,
        }
    );
}


module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    deleteUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeUserFavProductService
}