module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
      description: 'Create library component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Enter component name'
        },
        {
          type: 'input',
          name: 'path',
          message: 'Enter component path'
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{path}}/index.ts',
          templateFile: '.plop-templates/component/index.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{path}}/{{name}}.scss',
          templateFile: '.plop-templates/component/scss.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{path}}/{{name}}.stories.tsx',
          templateFile: '.plop-templates/component/stories.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{path}}/{{name}}.test.tsx',
          templateFile: '.plop-templates/component/test.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{path}}/{{name}}.template.tsx',
          templateFile: '.plop-templates/component/template.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{path}}/{{name}}.types.ts',
          templateFile: '.plop-templates/component/types.hbs'
        },
      ]
  });
};