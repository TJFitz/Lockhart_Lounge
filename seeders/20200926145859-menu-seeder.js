"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Menu", [
      {
        category: "test menu",
      },
    ]);
    await queryInterface.bulkInsert("Appetizers", [
      {
        name: "Spring Avocado Toast",
        description: "Grilled sourdough bread, avocado, fresh greens",
        price: 8.99,
        tags: "730cal",
        image:
          "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
      {
        name: "Smoked Salmon Crisps",
        description:
          "Salmon cornets topped with creme fraiche and fresh salmon",
        price: 10.99,
        tags: "920cal",
        image:
          "https://images.pexels.com/photos/41967/appetizer-canape-canapes-cheese-41967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
      {
        name: "Sweet Potato Fries",
        description: "Hand-cut sweet potato fries with flavorful garnishes",
        price: 11.99,
        tags: "540cal",
        image:
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
    ]);
    await queryInterface.bulkInsert("Entrees", [
      {
        name: "Lockhart Filet",
        description: "Tender-cut filet, hand-seasoned and cooked to perfection",
        price: 15.99,
        tags: "1020cal",
        image:
          "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
      {
        name: "Cherry Tomato Pasta",
        description: "Angel hair pasta with fresh cherry tomatoes",
        price: 13.99,
        tags: "940cal",
        image:
          "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
      {
        name: "Herb Grilled Salmon",
        description: "Grilled, bourbon-glazed salmon over rice",
        price: 12.99,
        tags: "860cal",
        image:
          "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
    ]);
    await queryInterface.bulkInsert("Drinks", [
      {
        name: "Mohito",
        description: "White rum, mint, and a drizzle of lime",
        price: 12.99,
        tags: "450cal",
        image:
          "https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
      {
        name: "Earl Gray Martini",
        description: "Tea leaves, lemon juice, white sugar and gin",
        price: 10.99,
        tags: "160cal",
        image:
          "https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
      {
        name: "Fruity Cooler",
        description: "Patron mixed with our signature fruit juice",
        price: 6.99,
        tags: "230cal",
        image:
          "https://images.pexels.com/photos/452737/pexels-photo-452737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        createdAt: new Date(),
        updatedAt: new Date(),
        MenuId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
