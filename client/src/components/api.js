export const fetchOrders = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, customer: "John", product: "Test A", status: "Pending" },
          { id: 2, customer: "Jane", product: "Test B", status: "Completed" },
          // ... more mock data
        ]);
      }, 1000); // Simulate a delay
    });
  };
  