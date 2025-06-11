import { PlusIcon, EditIcon, TrashIcon, CheckIcon, XIcon, ArrowBackUpIcon } from 'vue-tabler-icons';
import { o as img6$1, j as img5$2, m as user4, l as user3, R as user2, h as user1, U as img3$1, V as img4$1, S as img1$1, T as img2$2, W as img5$1 } from './server.mjs';

const basicTableData1 = [
  {
    avatar: user1,
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    status: "Active",
    statuscolor: "success",
    teams: [
      {
        id: "1",
        color: "error",
        text: "S"
      },
      {
        id: "2",
        color: "secondary   ",
        text: "D"
      }
    ],
    budget: "$3.9"
  },
  {
    avatar: user2,
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    status: "Pending",
    statuscolor: "warning",
    teams: [
      {
        id: "1",
        color: "secondary",
        text: "N"
      },
      {
        id: "2",
        color: "warning   ",
        text: "X"
      },
      {
        id: "3",
        color: "primary   ",
        text: "A"
      }
    ],
    budget: "$24.5k"
  },
  {
    avatar: user3,
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    status: "Completed",
    statuscolor: "primary",
    teams: [
      {
        id: "1",
        color: "secondary",
        text: "X"
      }
    ],
    budget: "$12.8k"
  },
  {
    avatar: user4,
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    status: "Active",
    statuscolor: "success",
    teams: [
      {
        id: "1",
        color: "primary",
        text: "X"
      },
      {
        id: "2",
        color: "error",
        text: "Y"
      }
    ],
    budget: "$2.4k"
  },
  {
    avatar: img5$2,
    name: "Micheal Doe",
    post: "Content Writer",
    pname: "Helping Hands WP Theme",
    status: "Cancel",
    statuscolor: "error",
    teams: [
      {
        id: "1",
        color: "secondary",
        text: "S"
      }
    ],
    budget: "$9.3k"
  }
];
const basicTableData2 = [
  {
    avatar: user1,
    name: "Olivia Rhye",
    post: "Xtreme admin",
    status: "active",
    statuscolor: "primary",
    users: [
      {
        id: "1",
        icon: user2
      },
      {
        id: "2",
        icon: user1
      }
    ]
  },
  {
    avatar: user2,
    name: "Barbara Steele",
    post: "Adminpro admin",
    status: "cancel",
    statuscolor: "error",
    users: [
      {
        id: "1",
        icon: user3
      },
      {
        id: "2",
        icon: user2
      },
      {
        id: "3",
        icon: user1
      }
    ]
  },
  {
    avatar: user3,
    name: "Leonard Gordon",
    post: "Monster admin",
    status: "active",
    statuscolor: "primary",
    users: [
      {
        id: "1",
        icon: user2
      },
      {
        id: "2",
        icon: user3
      }
    ]
  },
  {
    avatar: user4,
    name: "Evelyn Pope",
    post: "Materialpro admin",
    status: "pending",
    statuscolor: "success",
    users: [
      {
        id: "1",
        icon: user3
      },
      {
        id: "2",
        icon: user2
      },
      {
        id: "3",
        icon: user1
      }
    ]
  },
  {
    avatar: img5$2,
    name: "Tommy Garza",
    post: "Elegant admin",
    status: "cancel",
    statuscolor: "error",
    users: [
      {
        id: "1",
        icon: img6$1
      },
      {
        id: "2",
        icon: img5$2
      }
    ]
  },
  {
    avatar: img6$1,
    name: "Isabel Vasquez",
    post: "Spike admin",
    status: "pending",
    statuscolor: "success",
    users: [
      {
        id: "1",
        icon: user4
      },
      {
        id: "2",
        icon: user2
      }
    ]
  }
];
const basicTableData3 = [
  {
    avatar: user1,
    name: "Olivia Rhye",
    handle: "@rhye",
    status: "active",
    statuscolor: "success",
    statusoffline: false,
    email: "olivia@ui.com",
    teams: [
      {
        status: "Design",
        statuscolor: "primary"
      },
      {
        status: "Product",
        statuscolor: "secondary"
      }
    ]
  },
  {
    avatar: user2,
    name: "Barbara Steele",
    handle: "@steele",
    status: "offline",
    statusoffline: true,
    statuscolor: "dark",
    email: "steele@ui.com",
    teams: [
      {
        status: "Product",
        statuscolor: "secondary"
      },
      {
        status: "Operations",
        statuscolor: "error"
      }
    ]
  },
  {
    avatar: user3,
    name: "Leonard Gordon",
    handle: "@gordon",
    status: "active",
    statusoffline: false,
    statuscolor: "success",
    email: "olivia@ui.com",
    teams: [
      {
        status: "Finance",
        statuscolor: "primary"
      },
      {
        status: "Customer Success",
        statuscolor: "success"
      }
    ]
  },
  {
    avatar: user4,
    name: "Evelyn Pope",
    handle: "@pope",
    status: "offline",
    statusoffline: true,
    statuscolor: "dark",
    email: "steele@ui.com",
    teams: [
      {
        status: "Operations",
        statuscolor: "error"
      },
      {
        status: "Design",
        statuscolor: "primary"
      }
    ]
  },
  {
    avatar: img5$2,
    name: "Tommy Garza",
    handle: "@garza",
    status: "active",
    statusoffline: false,
    statuscolor: "success",
    email: "olivia@ui.com",
    teams: [
      {
        status: "Product",
        statuscolor: "secondary"
      }
    ]
  },
  {
    avatar: img6$1,
    name: "Isabel Vasquez",
    handle: "@vasquez",
    status: "active",
    statusoffline: false,
    statuscolor: "success",
    email: "steele@ui.com",
    teams: [
      {
        status: "Customer Success",
        statuscolor: "success"
      }
    ]
  }
];
const basicTableData4 = [
  {
    invoice: "INV-3066",
    status: "paid",
    statuscolor: "primary",
    statusicon: CheckIcon,
    avatar: user1,
    name: "Olivia Rhye",
    handle: "olivia@ui.com",
    progress: 60
  },
  {
    invoice: "INV-3067",
    status: "cancelled",
    statuscolor: "error",
    statusicon: XIcon,
    avatar: user2,
    name: "Barbara Steele",
    handle: "steele@ui.com",
    progress: 30
  },
  {
    invoice: "INV-3068",
    status: "paid",
    statuscolor: "primary",
    statusicon: CheckIcon,
    avatar: user3,
    name: "Leonard Gordon",
    handle: "olivia@ui.com",
    progress: 45
  },
  {
    invoice: "INV-3069",
    status: "refunded",
    statuscolor: "secondary",
    statusicon: ArrowBackUpIcon,
    avatar: user4,
    name: "Evelyn Pope",
    handle: "steele@ui.com",
    progress: 37
  },
  {
    invoice: "INV-3070",
    status: "cancelled",
    statuscolor: "error",
    statusicon: XIcon,
    avatar: img5$2,
    name: "Tommy Garza",
    handle: "olivia@ui.com",
    progress: 87
  },
  {
    invoice: "INV-3071",
    status: "refunded",
    statuscolor: "secondary",
    statusicon: ArrowBackUpIcon,
    avatar: img6$1,
    name: "Isabel Vasquez",
    handle: "steele@ui.com",
    progress: 32
  }
];
const basicTableData5 = [
  {
    avatar: img1$1,
    name: "Top Authors",
    handle: "Successful Fellas",
    users: "4300 Users",
    courses: [
      {
        status: "Angular",
        statuscolor: "error"
      },
      {
        status: "PHP",
        statuscolor: "primary"
      }
    ]
  },
  {
    avatar: img2$2,
    name: "Popular Authors",
    handle: "Most Successful",
    users: "1200 Users",
    courses: [
      {
        status: "Bootstrap",
        statuscolor: "primary"
      }
    ]
  },
  {
    avatar: img3$1,
    name: "New Users",
    handle: "Awesome Users",
    users: "2000 Users",
    courses: [
      {
        status: "Reactjs",
        statuscolor: "success"
      },
      {
        status: "Angular",
        statuscolor: "error"
      }
    ]
  },
  {
    avatar: img4$1,
    name: "Active Customers",
    handle: "Best Customers",
    users: "1500 Users",
    courses: [
      {
        status: "Bootstrap",
        statuscolor: "primary"
      }
    ]
  },
  {
    avatar: img5$1,
    name: "Bestseller Theme",
    handle: "Amazing Templates",
    users: "9500 Users",
    courses: [
      {
        status: "Angular",
        statuscolor: "error"
      },
      {
        status: "Reactjs",
        statuscolor: "success"
      }
    ]
  }
];
const darkTableData = [
  {
    avatar: img6$1,
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    status: "Pending",
    statuscolor: "warning",
    teams: [
      {
        id: "1",
        color: "secondary",
        text: "N"
      },
      {
        id: "2",
        color: "warning   ",
        text: "X"
      },
      {
        id: "3",
        color: "primary   ",
        text: "A"
      }
    ],
    budget: "$24.5k"
  },
  {
    avatar: img5$2,
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    status: "Completed",
    statuscolor: "primary",
    teams: [
      {
        id: "1",
        color: "secondary",
        text: "X"
      }
    ],
    budget: "$12.8k"
  },
  {
    avatar: user4,
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    status: "Active",
    statuscolor: "success",
    teams: [
      {
        id: "1",
        color: "primary",
        text: "X"
      },
      {
        id: "2",
        color: "error",
        text: "Y"
      }
    ],
    budget: "$2.4k"
  },
  {
    avatar: user3,
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    status: "Active",
    statuscolor: "success",
    teams: [
      {
        id: "1",
        color: "error",
        text: "S"
      },
      {
        id: "2",
        color: "secondary   ",
        text: "D"
      }
    ],
    budget: "$3.9"
  },
  {
    avatar: user2,
    name: "Micheal Doe",
    post: "Content Writer",
    pname: "Helping Hands WP Theme",
    status: "Cancel",
    statuscolor: "error",
    teams: [
      {
        id: "1",
        color: "secondary",
        text: "S"
      }
    ],
    budget: "$9.3k"
  },
  {
    avatar: user1,
    name: "John Deo",
    post: "Web Designer",
    pname: "Elite Admin",
    status: "Active",
    statuscolor: "success",
    teams: [
      {
        id: "1",
        color: "primary",
        text: "R"
      },
      {
        id: "2",
        color: "secondary   ",
        text: "D"
      }
    ],
    budget: "$3.9"
  }
];
const tableDensityData = [
  {
    avatar: img6$1,
    name: "Isabel Vasquez",
    post: "Spike admin",
    status: "pending",
    statuscolor: "success",
    users: [
      {
        id: "1",
        icon: img6$1
      },
      {
        id: "2",
        icon: user1
      }
    ]
  },
  {
    avatar: user1,
    name: "Olivia Rhye",
    post: "Xtreme admin",
    status: "active",
    statuscolor: "primary",
    users: [
      {
        id: "1",
        icon: user2
      },
      {
        id: "2",
        icon: user1
      }
    ]
  },
  {
    avatar: user3,
    name: "Leonard Gordon",
    post: "Monster admin",
    status: "active",
    statuscolor: "primary",
    users: [
      {
        id: "1",
        icon: user2
      },
      {
        id: "2",
        icon: user3
      }
    ]
  },
  {
    avatar: user4,
    name: "Evelyn Pope",
    post: "Materialpro admin",
    status: "pending",
    statuscolor: "success",
    users: [
      {
        id: "1",
        icon: user3
      },
      {
        id: "2",
        icon: user2
      },
      {
        id: "3",
        icon: user1
      }
    ]
  },
  {
    avatar: user2,
    name: "Barbara Steele",
    post: "Adminpro admin",
    status: "cancel",
    statuscolor: "error",
    users: [
      {
        id: "1",
        icon: user3
      },
      {
        id: "2",
        icon: user2
      },
      {
        id: "3",
        icon: user1
      }
    ]
  },
  {
    avatar: img5$2,
    name: "Tommy Garza",
    post: "Elegant admin",
    status: "cancel",
    statuscolor: "error",
    users: [
      {
        id: "1",
        icon: img6$1
      },
      {
        id: "2",
        icon: img5$2
      }
    ]
  }
];
const tableFixedHeaderData = [
  {
    avatar: user2,
    name: "Barbara Steele",
    handle: "@steele",
    status: "offline",
    statusoffline: true,
    statuscolor: "dark",
    email: "steele@ui.com",
    teams: [
      {
        status: "Product",
        statuscolor: "success"
      },
      {
        status: "Operations",
        statuscolor: "error"
      }
    ]
  },
  {
    avatar: user3,
    name: "Leonard Gordon",
    handle: "@gordon",
    status: "active",
    statusoffline: false,
    statuscolor: "success",
    email: "olivia@ui.com",
    teams: [
      {
        status: "Finance",
        statuscolor: "info"
      },
      {
        status: "Customer Success",
        statuscolor: "success"
      }
    ]
  },
  {
    avatar: user1,
    name: "Olivia Rhye",
    handle: "@rhye",
    status: "active",
    statusoffline: false,
    statuscolor: "success",
    email: "olivia@ui.com",
    teams: [
      {
        status: "Design",
        statuscolor: "info"
      },
      {
        status: "Product",
        statuscolor: "primary"
      },
      {
        status: "Material",
        statuscolor: "success"
      },
      {
        status: "Account",
        statuscolor: "info"
      }
    ]
  },
  {
    avatar: user4,
    name: "Evelyn Pope",
    handle: "@pope",
    status: "offline",
    statusoffline: true,
    statuscolor: "dark",
    email: "steele@ui.com",
    teams: [
      {
        status: "Operations",
        statuscolor: "error"
      },
      {
        status: "Design",
        statuscolor: "info"
      }
    ]
  },
  {
    avatar: img5$2,
    name: "Tommy Garza",
    handle: "@garza",
    status: "active",
    statusoffline: false,
    statuscolor: "success",
    email: "olivia@ui.com",
    teams: [
      {
        status: "Product",
        statuscolor: "warning"
      }
    ]
  },
  {
    avatar: img6$1,
    name: "Isabel Vasquez",
    handle: "@vasquez",
    status: "active",
    statusoffline: false,
    statuscolor: "success",
    email: "steele@ui.com",
    teams: [
      {
        status: "Customer Success",
        statuscolor: "success"
      }
    ]
  }
];
const heightTableData = [
  {
    avatar: img3$1,
    name: "New Users",
    handle: "Awesome Users",
    users: "2000 Users",
    email: "mark@ui.com",
    courses: [
      {
        status: "Reactjs",
        statuscolor: "success"
      },
      {
        status: "Angular",
        statuscolor: "error"
      }
    ]
  },
  {
    avatar: img4$1,
    name: "Active Customers",
    handle: "Best Customers",
    users: "1500 Users",
    email: "deo@ui.com",
    courses: [
      {
        status: "Bootstrap",
        statuscolor: "primary"
      }
    ]
  },
  {
    avatar: img1$1,
    name: "Top Authors",
    handle: "Successful Fellas",
    users: "4300 Users",
    email: "olivia@ui.com",
    courses: [
      {
        status: "Angular",
        statuscolor: "error"
      },
      {
        status: "PHP",
        statuscolor: "primary"
      }
    ]
  },
  {
    avatar: img2$2,
    name: "Popular Authors",
    handle: "Most Successful",
    users: "1200 Users",
    email: "john@doe.com",
    courses: [
      {
        status: "Bootstrap",
        statuscolor: "primary"
      }
    ]
  },
  {
    avatar: img5$1,
    name: "Bestseller Theme",
    handle: "Amazing Templates",
    users: "9500 Users",
    email: "steele@ui.com",
    courses: [
      {
        status: "Angular",
        statuscolor: "error"
      },
      {
        status: "Reactjs",
        statuscolor: "success"
      }
    ]
  },
  {
    avatar: img1$1,
    name: "New Authors",
    handle: "Successful Fellas",
    users: "4800 Users",
    email: "olivia@ui.com",
    courses: [
      {
        status: "Angular",
        statuscolor: "error"
      },
      {
        status: "Java",
        statuscolor: "info"
      }
    ]
  }
];
const tableActionData = [
  {
    icon: PlusIcon,
    listtitle: "Add"
  },
  {
    icon: EditIcon,
    listtitle: "Edit"
  },
  {
    icon: TrashIcon,
    listtitle: "Delete"
  }
];

export { basicTableData2 as a, basicTableData1 as b, basicTableData3 as c, basicTableData5 as d, basicTableData4 as e, darkTableData as f, tableDensityData as g, tableFixedHeaderData as h, heightTableData as i, tableActionData as t };
//# sourceMappingURL=basicTables-ByY6OgyZ.mjs.map
