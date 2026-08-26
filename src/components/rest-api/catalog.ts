/**
 * Vertex REST API — illustrative marketing catalog.
 * Example endpoints and payloads are for UI demonstration only.
 */
export const restApiProduct = {
  name: "REST API",
  category: "Developers",
  tagline: "Connect Vertex POS to the way you work.",
  description:
    "Build powerful integrations with secure APIs for orders, menus, customers, payments, inventory, and more.",
  baseUrl: "https://api.vertexpos.com",
} as const;

export const apiCapabilities = [
  {
    title: "Orders",
    copy: "Create, retrieve, update, and track restaurant orders.",
    endpoint: "GET /v1/orders",
  },
  {
    title: "Menu",
    copy: "Access menu items, categories, modifiers, pricing, and availability.",
    endpoint: "GET /v1/menu",
  },
  {
    title: "Customers",
    copy: "Connect customer profiles and ordering information.",
    endpoint: "GET /v1/customers",
  },
  {
    title: "Inventory",
    copy: "Keep external systems informed about stock and availability.",
    endpoint: "GET /v1/inventory",
  },
  {
    title: "Payments",
    copy: "Connect payment and transaction information to your workflows.",
    endpoint: "GET /v1/payments",
  },
  {
    title: "Webhooks",
    copy: "Receive real-time events when important POS activity happens.",
    endpoint: "POST /v1/webhooks",
  },
] as const;

export const workflowSteps = [
  {
    step: "01",
    title: "Authenticate",
    copy: "Secure your application with API credentials.",
  },
  {
    step: "02",
    title: "Request",
    copy: "Send requests to the Vertex API.",
  },
  {
    step: "03",
    title: "Process",
    copy: "Receive structured restaurant and POS data.",
  },
  {
    step: "04",
    title: "Automate",
    copy: "Use webhooks to react to real-time events.",
  },
] as const;

export const codeExamples = [
  {
    id: "get-orders",
    label: "GET Orders",
    method: "GET",
    path: "/v1/orders",
    request: `GET https://api.vertexpos.com/v1/orders
Authorization: Bearer YOUR_API_KEY`,
    response: `{
  "data": [
    {
      "id": "ORD-1842",
      "status": "preparing",
      "total": 42.50,
      "table": 12
    },
    {
      "id": "ORD-1843",
      "status": "completed",
      "total": 28.00,
      "table": 7
    }
  ]
}`,
  },
  {
    id: "post-order",
    label: "POST Order",
    method: "POST",
    path: "/v1/orders",
    request: `POST https://api.vertexpos.com/v1/orders
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "table": 12,
  "items": [
    { "sku": "TRUFFLE-BURGER", "qty": 1 }
  ]
}`,
    response: `{
  "id": "ORD-1844",
  "status": "new",
  "total": 18.00,
  "table": 12
}`,
  },
  {
    id: "get-menu",
    label: "GET Menu",
    method: "GET",
    path: "/v1/menu",
    request: `GET https://api.vertexpos.com/v1/menu
Authorization: Bearer YOUR_API_KEY`,
    response: `{
  "categories": [
    {
      "name": "Burgers",
      "items": [
        {
          "id": "item_01",
          "name": "Truffle Burger",
          "price": 18.00,
          "available": true
        }
      ]
    }
  ]
}`,
  },
  {
    id: "webhook",
    label: "Webhook",
    method: "POST",
    path: "/webhooks/events",
    request: `POST https://your-app.com/webhooks/vertex
Content-Type: application/json`,
    response: `{
  "event": "order.created",
  "timestamp": "2026-08-24T12:45:10Z",
  "data": {
    "order_id": "ORD-1842",
    "status": "new"
  }
}`,
  },
] as const;

export const endpointGroups = [
  {
    title: "Orders",
    endpoints: [
      { method: "GET", path: "/v1/orders", description: "List restaurant orders" },
      {
        method: "GET",
        path: "/v1/orders/{id}",
        description: "Retrieve a single order",
      },
      { method: "POST", path: "/v1/orders", description: "Create a new order" },
      {
        method: "PATCH",
        path: "/v1/orders/{id}",
        description: "Update order status or details",
      },
    ],
  },
  {
    title: "Menu",
    endpoints: [
      { method: "GET", path: "/v1/menu", description: "Retrieve the full menu" },
      {
        method: "GET",
        path: "/v1/menu/items",
        description: "List menu items",
      },
      {
        method: "GET",
        path: "/v1/menu/categories",
        description: "List menu categories",
      },
    ],
  },
  {
    title: "Customers",
    endpoints: [
      {
        method: "GET",
        path: "/v1/customers",
        description: "List customer profiles",
      },
      {
        method: "GET",
        path: "/v1/customers/{id}",
        description: "Retrieve a customer",
      },
    ],
  },
  {
    title: "Inventory",
    endpoints: [
      {
        method: "GET",
        path: "/v1/inventory",
        description: "View inventory overview",
      },
      {
        method: "GET",
        path: "/v1/inventory/items",
        description: "List inventory items",
      },
    ],
  },
  {
    title: "Payments",
    endpoints: [
      {
        method: "GET",
        path: "/v1/payments",
        description: "List payment records",
      },
      {
        method: "GET",
        path: "/v1/payments/{id}",
        description: "Retrieve a payment",
      },
    ],
  },
] as const;

export const webhookEvents = [
  "ORDER.CREATED",
  "ORDER.UPDATED",
  "ORDER.COMPLETED",
  "PAYMENT.COMPLETED",
  "MENU.UPDATED",
  "INVENTORY.UPDATED",
] as const;

export const securityPoints = [
  {
    title: "API authentication",
    copy: "Authenticate requests using secure API credentials.",
  },
  {
    title: "Encrypted connections",
    copy: "API traffic is protected using HTTPS.",
  },
  {
    title: "Scoped access",
    copy: "Give integrations access only to the data they need.",
  },
  {
    title: "Reliable responses",
    copy: "Predictable response structures make integrations easier to maintain.",
  },
] as const;

export const useCases = [
  {
    title: "Custom dashboards",
    copy: "Bring Vertex data into your own business intelligence and reporting tools.",
    accent: "01",
  },
  {
    title: "Online ordering",
    copy: "Connect your website or ordering platform with restaurant operations.",
    accent: "02",
  },
  {
    title: "Third-party integrations",
    copy: "Connect accounting, loyalty, CRM, delivery, or other business systems.",
    accent: "03",
  },
  {
    title: "Custom workflows",
    copy: "Automate repetitive restaurant operations with real-time POS events.",
    accent: "04",
  },
] as const;

export const developerExperience = [
  {
    title: "Clear documentation",
    copy: "Understand endpoints, requests, responses, and events without unnecessary complexity.",
  },
  {
    title: "Predictable APIs",
    copy: "Consistent structures make integrations easier to build and maintain.",
  },
  {
    title: "Built to extend",
    copy: "Connect Vertex to the tools and workflows unique to your business.",
  },
] as const;
