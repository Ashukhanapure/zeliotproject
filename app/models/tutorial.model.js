
//import the sequelize module
module.exports = (sequelize, Sequelize) => {

  // Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
  const Tutorial = sequelize.define("Library", {

    // Column-1, lib_section is an object with 
    // properties like type ,datatypes
    
    lib_section: {
      type: Sequelize.STRING
    },

    // column-2 lib_name
    lib_name: {
      type: Sequelize.STRING
    },

    //column-3 lib_addr
    lib_addr: {
      type: Sequelize.STRING    
    },

    //column-4 lib_phoneno
    lib_phoneno:{ 
        type: Sequelize.INTEGER(10)
      },
      

  },
  
  //created at
  //updated at
  { timestamps: false });

  //returning the values
  return Tutorial;
};
