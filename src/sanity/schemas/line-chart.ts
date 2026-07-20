import { defineType, defineField } from 'sanity';


export const lineChart = defineType({
  name: 'lineChart',
  type: 'object',
  title: 'Line Chart',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Chart ID',
    }),
    // defineField({
    //   name: 'labels',
    //   type: 'array',
    //   title: 'X-Axis Labels',
    //   of: [{ type: 'string' }],
    // }),
    // defineField({
    //   name: 'datasets',
    //   type: 'array',
    //   title: 'Datasets',
    //   of: [
    //     {
    //       type: 'object',
    //       name: 'dataset',
    //       fields: [
    //         { name: 'label', type: 'string', title: 'Dataset Name' },
    //         { name: 'color', type: 'string', title: 'Line Color (Hex)' },
    //         {
    //           name: 'data',
    //           type: 'array',
    //           of: [{ type: 'number' }],
    //           title: 'Data Points',
    //         },
    //       ],
    //     },
    //   ],
    // }),
  ],
});
