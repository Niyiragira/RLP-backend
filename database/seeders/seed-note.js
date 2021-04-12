module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.bulkInsert(
        "Notes",
        [
            { 
                userId: 1,
                title:"Microbiology and medical imaging",
                link: 'Microbiology',
                year:3,
                file:"absosdsnadmdw.pdf",
                createdAt: new Date(),
                updatedAt: new Date()
            },
          { 
            userId: 1,
            title:"Dummy title",
            link: 'some dummy link',
            year:1,
            file:"absonamdw.pdf",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
  
        {}
      ),
  
    down: (queryInterface, Sequelize) =>
      queryInterface.bulkDelete("Notes", null, {})
  };
