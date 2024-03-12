export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/todos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            todos: [
              {
                title: "Go Outside",
                desc: "Get some fresh air",
                todos: ["shopping", "cricket", "walking"],
              },
              {
                title: "Let's Work",
                desc: "Deadline closes in 3 days",
                todos: ["Feature update", "Team Meet", "Code Walkthrough"],
              },
              {
                title: "Home Work",
                desc: "To be done on priority",
                todos: ["Fix tap", "Wedding function"],
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Todo list not found.",
        });
      }
    }, 2000);
  });
};
