const users = [
    {
			id: 1,
      name: "Jason Bourne",
      provider: "United Health",
      priceEstimates: [
        {
          plan: "standard",
          priceEstimate: 91,
        },
        {
          plan: "premium",
          priceEstimate: 121,
        },
      ],
    },
    {
			id: 2,
      name: "James Bond",
      provider: "United Health",
      priceEstimates: [
        {
          plan: "standard",
          priceEstimate: 90,
        },
        {
          plan: "premium",
          priceEstimate: 120,
        },
      ],
    },
    {
			id: 3,
      name: "Ethan Hunt",
      provider: "Distributed Health",
      priceEstimates: [
        {
          plan: "basic",
          priceEstimate: 50,
        },
        {
          plan: "standard",
          priceEstimate: 99,
        },
      ],
    },
  ]

// grouping users by provider
const groupByProvider = users.reduce((group, user) => {
  const { provider } = user;
  group[provider] = group[provider] ?? [];
  group[provider].push(user);
  return group;
}, {});

//
const getProviderUsers = (users) => {
  const elements = []
  for (let i = 0; i < users.length; i++) {
    const provider = users[i][0]                      // extract provider name on every itration
    const providerUsers = users[i][1]                 // extract the list of users for that provider on every itration
    const userElement = {}                            // initialize an object to decorate the way I want it
    userElement['providerName'] = provider              // add the provider with string value of provider name
    const userList = []
    for (let j = 0; j < providerUsers.length; j++) {  // loop thru users array
      const usr = {}                                  // I want to decorate users each to have an object with name and id
      usr['name'] = providerUsers[j].name
      usr['id'] = providerUsers[j].id
      userList.push(usr)
    }
  userElement['providerUsers'] = userList
  elements.push(userElement)
  }
  return elements
}

const groupedUsers = Object.entries(groupByProvider)
export const data = getProviderUsers(groupedUsers)