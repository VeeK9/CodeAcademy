// Pavyzdžiai kaip galėtų atrodyti duomenys, kuriuos perdavus Komponentų užduočių klasėms būtų sukurti HTML elementai.

const data1_1 = {
  attributes: [
    {
      name: 'src',
      value: 'https://...'
    }, {
      name: 'alt',
      value: 'gražus paveiksliukas'
    }, {
      name: 'class',
      value: 'vienKlase kitaKlase darKazkas'
    }
  ]
};
const data1_2 = {
  text: 'Lorem30 ...',
  attributes: [
    {
      name: 'class',
      value: 'vienKlase kitaKlase darKazkas'
    }, {
      name: 'id',
      value: 'someId'
    }
  ]
}
const data1_3 = {
  size: '1',
  text: 'Lorem5 ...',
  attributes: [
    {
      name: 'class',
      value: 'vienKlase kitaKlase darKazkas'
    }, {
      name: 'id',
      value: 'someId'
    }
  ]
}
const data1_4 = {
  tagName: 'div',
  attributes: [
    {
      name: 'class',
      value: 'vienKlase kitaKlase darKazkas'
    }, {
      name: 'id',
      value: 'someId'
    }
  ]
}

export const data2 = {
  listType: 'ul',
  attributes: [
    {
      name: 'class',
      value: 'marginRemove paddingRemove'
    }, {
      name: 'id',
      value: 'someId'
    }
  ],
  listItems: [
    {
      text: '1lorem2 ...',
      attributes: [
        {
          name: 'class',
          value: 'listItem'
        }
      ]
    }, {
      text: '2lorem2 ...',
      attributes: [
        {
          name: 'class',
          value: 'listItem'
        }
      ]
    }, {
      text: '3lorem2 ...',
      attributes: [
        {
          name: 'class',
          value: 'listItem'
        }
      ]
    }, {
      text: '4lorem2 ...',
      attributes: [
        {
          name: 'class',
          value: 'listItem'
        }
      ]
    }, {
      text: 'Naujas sąrašo elementas',
      attributes: [
        {
          name: 'class',
          value: 'listItem super'
        },{
          name: 'id',
          value: 'someFunLookinId'
        }
      ]
    }
  ]
}

const data3 = {
  attributes: [
    {
      name: 'class',
      value: 'vienKlase kitaKlase darKazkas'
    }, {
      name: 'id',
      value: 'movie'
    }, {
      name: 'name',
      value: 'movie'
    }
  ],
  options: [
    {
      text: 'X-Men',
      attributes: [
        {
          name: 'value',
          value: 'X-Men'
        }, {
          name: 'disabled'
        }
      ]
    }, {
      text: 'Barbie',
      attributes: [
        {
          name: 'value',
          value: 'Barbie'
        }, {
          name: 'selected'
        }
      ]
    }, {
      text: 'Oppenheimer',
      attributes: [
        {
          name: 'value',
          value: 'Oppenheimer'
        }
      ]
    }
  ]
}

export const data4 = {
  attributes: [
    {
      name: 'class',
      value: 'vienKlase kitaKlase darKazkas'
    }, {
      name: 'id',
      value: 'someId'
    }
  ],
  thead: {
    attributes: [
      {
        name: 'class',
        value: 'vienKlase kitaKlase darKazkas'
      }, {
        name: 'id',
        value: 'someId'
      }
    ],
    row: {
      attributes: [
        {
          name: 'class',
          value: 'vienKlase kitaKlase darKazkas'
        }, {
          name: 'id',
          value: 'someId'
        }
      ],
      columns: [
        {
          text: 'stulpelioName1',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }
          ]
        }, {
          text: 'stulpelioName2',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }
          ]
        }, {
          text: 'stulpelioName3',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }
          ]
        }
      ]
    }
  },
  tbody: {
    attributes: [
      {
        name: 'class',
        value: 'vienKlase kitaKlase darKazkas'
      }, {
        name: 'id',
        value: 'someId'
      }
    ],
    rows: [
      {
        attributes: [
          {
            name: 'class',
            value: 'vienKlase kitaKlase darKazkas'
          }, {
            name: 'id',
            value: 'someId'
          }
        ],
        columns: [
          {
            text: 'someText11',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText12',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText13',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }
        ]
      }, {
        attributes: [
          {
            name: 'class',
            value: 'vienKlase kitaKlase darKazkas'
          }, {
            name: 'id',
            value: 'someId'
          }
        ],
        columns: [
          {
            text: 'someText21',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText22',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText23',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }
        ]
      }, {
        attributes: [
          {
            name: 'class',
            value: 'vienKlase kitaKlase darKazkas'
          }, {
            name: 'id',
            value: 'someId'
          }
        ],
        columns: [
          {
            text: 'someText31',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText32',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText33',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }
        ]
      }, {
        attributes: [
          {
            name: 'class',
            value: 'vienKlase kitaKlase darKazkas'
          }, {
            name: 'id',
            value: 'someId'
          }
        ],
        columns: [
          {
            text: 'someText41',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText42',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }, {
            text: 'someText43',
            attributes: [
              {
                name: 'class',
                value: 'vienKlase kitaKlase darKazkas'
              }, {
                name: 'id',
                value: 'someId'
              }
            ]
          }
        ]
      }
    ]
  },
  tfoot: {
    attributes: [
      {
        name: 'class',
        value: 'vienKlase kitaKlase darKazkas'
      }, {
        name: 'id',
        value: 'someId'
      }
    ],
    row: {
      attributes: [
        {
          name: 'class',
          value: 'vienKlase kitaKlase darKazkas'
        }, {
          name: 'id',
          value: 'someId'
        }
      ],
      columns: [
        {
          text: 'suma',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }, {
              name: 'colspan',
              value: '2'
            }
          ]
        }, {
          text: '',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }
          ]
        }
      ]
    }
  }
}

const data5 = {
  tagName: 'div',
  attributes: [
    {
      name: 'class',
      value: 'vienKlase kitaKlase darKazkas'
    }, {
      name: 'id',
      value: 'someId'
    }
  ],
  childElements: [
    {
      tagName: 'h1',
      text: 'Lorem5 ...',
      attributes: [
        {
          name: 'class',
          value: 'vienKlase kitaKlase darKazkas'
        }, {
          name: 'id',
          value: 'someId'
        }
      ],
    }, {
      tagName: 'img',
      attributes: [
        {
          name: 'class',
          value: 'vienKlase kitaKlase darKazkas'
        }, {
          name: 'id',
          value: 'someId'
        }, {
          name: 'src',
          value: 'https://...'
        }, {
          name: 'alt',
          value: 'Some nice image'
        }
      ],
    }, {
      tagName: 'div',
      attributes: [
        {
          name: 'class',
          value: 'vienKlase kitaKlase darKazkas'
        }, {
          name: 'id',
          value: 'someId'
        }
      ],
      childElements: [
        {
          tagName: 'h3',
          text: 'Lorem10 ...',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }
          ],
        }, {
          tagName: 'p',
          text: 'Lorem20 ...',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }
          ],
        }, {
          tagName: 'p',
          text: 'Lorem20 ...',
          attributes: [
            {
              name: 'class',
              value: 'vienKlase kitaKlase darKazkas'
            }, {
              name: 'id',
              value: 'someId'
            }
          ],
        }
      ]
    }
  ]
}