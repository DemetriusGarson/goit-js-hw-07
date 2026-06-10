const categories = {
  categoriesNames: [...document.querySelectorAll('.item')],

  showNumberOfCategories() {
    console.log(`Number of Categories: ${this.categoriesNames.length}`);
  },

  showCategoriesNames() {
    for (const category of this.categoriesNames) {
      console.log(`Category: ${category.querySelector('h2').textContent}`);
      console.log(
        `Elements: ${category.querySelector('ul').querySelectorAll('li').length}`
      );
    }
  },
};

categories.showNumberOfCategories();
categories.showCategoriesNames();
