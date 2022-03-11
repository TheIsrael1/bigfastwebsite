export const testData = {
    "openapi": "3.0.2",
    "info": {
    "title": "FastAPI",
    "version": "0.1.0"
    },
    "paths": {
    "/users": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Create User",
    "operationId": "create_user_users_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/login": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Login User",
    "operationId": "login_user_login_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserLogin"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/login/organization": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Login User",
    "operationId": "login_user_login_organization_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserOrgLogin"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/logout": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Logout User",
    "operationId": "logout_user_logout_post",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/users/me": {
    "get": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Get User",
    "operationId": "get_user_users_me_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/User"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    },
    "put": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Update User",
    "operationId": "update_user_users_me_put",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/users/resend-verification/code": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Resend Code Verification",
    "operationId": "resend_code_verification_users_resend_verification_code_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserCodeVerification"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/verify/code/{code}": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Verify User With Code",
    "operationId": "verify_user_with_code_users_verify_code__code__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Code",
    "type": "string"
    },
    "name": "code",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/forgot-password/code": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Send Code Password Reset Email",
    "operationId": "send_code_password_reset_email_users_forgot_password_code_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserCodeVerification"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/password-change/code/{code}": {
    "put": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Password Change With Code",
    "operationId": "password_change_with_code_users_password_change_code__code__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Code",
    "type": "string"
    },
    "name": "code",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserPasswordUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/resend-verification/token": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Resend Token Verification",
    "operationId": "resend_token_verification_users_resend_verification_token_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserTokenVerification"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/verify/token/{token}": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Verify User With Token",
    "operationId": "verify_user_with_token_users_verify_token__token__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Token",
    "type": "string"
    },
    "name": "token",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/forgot-password/token": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Send Token Password Reset Email",
    "operationId": "send_token_password_reset_email_users_forgot_password_token_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserTokenVerification"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/password-change/token/{token}": {
    "put": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Password Change With Token",
    "operationId": "password_change_with_token_users_password_change_token__token__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Token",
    "type": "string"
    },
    "name": "token",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserPasswordUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/organizations": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Organizations",
    "operationId": "get_organizations_organizations_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Organizations Organizations Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Organization"
    }
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    },
    "post": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Create Organization",
    "operationId": "create_organization_organizations_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/OrganizationCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Organization"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/organizations/{organization_id}": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Organization",
    "operationId": "get_organization_organizations__organization_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "integer"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/countries": {
    "get": {
    "tags": [
    "Countries",
    "Countries"
    ],
    "summary": "Get Countries",
    "description": "Get Countries and their respective states\n\nArgs:\n    country_name (str): serves as a filter for a particular country\n\nReturns:\n    List[Country]: list of countries and their respective states",
    "operationId": "get_countries_countries_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Country"
    }
    }
    }
    }
    }
    }
    },
    "/countries/{country_code}/states": {
    "get": {
    "tags": [
    "Countries",
    "Countries"
    ],
    "summary": "Get Country States",
    "description": "Get states within a particular country\n\nArgs:\n    country_name (str): serves as a filter for a particular country\n\nReturns:\n    List[State]: list of states and their respective cities",
    "operationId": "get_country_states_countries__country_code__states_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Country Code",
    "type": "string"
    },
    "name": "country_code",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/State"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/countries/codes": {
    "get": {
    "tags": [
    "Countries",
    "Countries"
    ],
    "summary": "Get Countries Dial Codes",
    "description": "Get Countries and their respective codes\n    including dial codes and sample phone formats\n\nArgs:\n    country (str): serves as a filter for a particular country\n\nReturns:\n    List[Country]: list of countries and their respective dial codes",
    "operationId": "get_countries_dial_codes_countries_codes_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Country Code",
    "type": "string"
    },
    "name": "country_code",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Country"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/support/faqs": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Faqs",
    "operationId": "get_faqs_support_faqs_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Faqs Support Faqs Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/FaqInDB"
    }
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Create Faq",
    "operationId": "create_faq_support_faqs_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Faq"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreateFaqRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/support/tickets": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Tickets",
    "operationId": "get_tickets_support_tickets_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Tickets Support Tickets Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Create Ticket",
    "operationId": "create_ticket_support_tickets_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Ticket"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreateTicketRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/support/ticket/{short_id}": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Ticket",
    "operationId": "get_ticket_support_ticket__short_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/support/tickets/{short_id}/reply": {
    "post": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Reply Ticket",
    "operationId": "reply_ticket_support_tickets__short_id__reply_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketReply"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketReplyRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/support/tickets/{short_id}/close": {
    "put": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Close Ticket",
    "operationId": "close_ticket_support_tickets__short_id__close_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketCloseRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/support/tickets/{short_id}/replies": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Ticket Replies",
    "operationId": "get_ticket_replies_support_tickets__short_id__replies_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Ticket Replies Support Tickets  Short Id  Replies Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/TicketReplyInDB"
    }
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/support/tickets/open": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Open Tickets",
    "operationId": "get_open_tickets_support_tickets_open_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Open Tickets Support Tickets Open Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    }
    }
    }
    }
    }
    },
    "/support/tickets/closed": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Closed Tickets",
    "operationId": "get_closed_tickets_support_tickets_closed_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Closed Tickets Support Tickets Closed Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/ClosedTicket"
    }
    }
    }
    }
    }
    }
    }
    },
    "/blog": {
    "post": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Create Blog",
    "operationId": "create_blog_blog_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/BlogCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/blog/{blog_id}": {
    "get": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Get Blog",
    "operationId": "get_blog_blog__blog_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Blog Id",
    "type": "string"
    },
    "name": "blog_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "put": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Update Blog",
    "operationId": "update_blog_blog__blog_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Blog Id",
    "type": "string"
    },
    "name": "blog_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/BlogUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Delete Blog",
    "operationId": "delete_blog_blog__blog_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Blog Id",
    "type": "string"
    },
    "name": "blog_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "HTTPBearer": []
    }
    ]
    }
    },
    "/blogs": {
    "get": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Get All Blogs",
    "operationId": "get_all_blogs_blogs_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get All Blogs Blogs Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    }
    }
    }
    }
    },
    "/blogs/{user_id}": {
    "get": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Get User Blogs",
    "operationId": "get_user_blogs_blogs__user_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "User Id",
    "type": "string"
    },
    "name": "user_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get User Blogs Blogs  User Id  Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}": {
    "get": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Get All Comments Related To Model",
    "operationId": "get_all_comments_related_to_model_comments__model_name__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{object_id}": {
    "get": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Get All Comments For Object",
    "operationId": "get_all_comments_for_object_comments__model_name___object_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Object Id",
    "type": "string"
    },
    "name": "object_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Create New Comment For Object",
    "operationId": "create_new_comment_for_object_comments__model_name___object_id__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Object Id",
    "type": "integer"
    },
    "name": "object_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CommentCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/reply": {
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Reply To Comment",
    "operationId": "reply_to_comment_comments__model_name___comment_id__reply_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CommentCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/update": {
    "put": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Update Comment By Id",
    "operationId": "update_comment_by_id_comments__model_name___comment_id__update_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CommentUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/delete": {
    "delete": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Delete Comment By Id",
    "operationId": "delete_comment_by_id_comments__model_name___comment_id__delete_delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/vote": {
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Vote On Comment",
    "operationId": "vote_on_comment_comments__model_name___comment_id__vote_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Action",
    "type": "string"
    },
    "name": "action",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/": {
    "get": {
    "tags": [
    "Home"
    ],
    "summary": "Get Root",
    "operationId": "get_root__get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    }
    }
    }
    },
    "/test": {
    "get": {
    "tags": [
    "Test"
    ],
    "summary": "Run Test",
    "operationId": "run_test_test_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    }
    }
    }
    }
    },
    "components": {
    "schemas": {
    "Blog": {
    "title": "Blog",
    "required": [
    "title",
    "content",
    "id",
    "creator",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "creator": {
    "title": "Creator",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "BlogCreate": {
    "title": "BlogCreate",
    "required": [
    "title",
    "content"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    }
    }
    },
    "BlogUpdate": {
    "title": "BlogUpdate",
    "required": [
    "title",
    "content"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    }
    }
    },
    "ClosedTicket": {
    "title": "ClosedTicket",
    "required": [
    "title",
    "issue",
    "opened_by",
    "short_id",
    "closed",
    "date_created",
    "closed_by"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "issue": {
    "title": "Issue",
    "type": "string"
    },
    "opened_by": {
    "title": "Opened By",
    "type": "string"
    },
    "short_id": {
    "title": "Short Id",
    "type": "string"
    },
    "closed": {
    "title": "Closed",
    "type": "boolean"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "closed_by": {
    "title": "Closed By",
    "type": "string"
    }
    }
    },
    "CommentCreate": {
    "title": "CommentCreate",
    "required": [
    "text",
    "name",
    "email"
    ],
    "type": "object",
    "properties": {
    "text": {
    "title": "Text",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    }
    }
    },
    "CommentUpdate": {
    "title": "CommentUpdate",
    "required": [
    "text",
    "name",
    "email"
    ],
    "type": "object",
    "properties": {
    "text": {
    "title": "Text",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    }
    }
    },
    "Country": {
    "title": "Country",
    "required": [
    "name",
    "iso3",
    "iso2",
    "dial_code",
    "states"
    ],
    "type": "object",
    "properties": {
    "name": {
    "title": "Name",
    "type": "string"
    },
    "iso3": {
    "title": "Iso3",
    "type": "string"
    },
    "iso2": {
    "title": "Iso2",
    "type": "string"
    },
    "dial_code": {
    "title": "Dial Code",
    "type": "string"
    },
    "states": {
    "title": "States",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/State"
    }
    }
    }
    },
    "CreateFaqRes": {
    "title": "CreateFaqRes",
    "required": [
    "message",
    "faq"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    },
    "faq": {
    "$ref": "#/components/schemas/Faq"
    }
    }
    },
    "CreateTicketRes": {
    "title": "CreateTicketRes",
    "required": [
    "message",
    "ticket"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    },
    "ticket": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    },
    "Faq": {
    "title": "Faq",
    "required": [
    "question",
    "answer"
    ],
    "type": "object",
    "properties": {
    "question": {
    "title": "Question",
    "type": "string"
    },
    "answer": {
    "title": "Answer",
    "type": "string"
    }
    }
    },
    "FaqInDB": {
    "title": "FaqInDB",
    "required": [
    "question",
    "answer",
    "created_by",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "question": {
    "title": "Question",
    "type": "string"
    },
    "answer": {
    "title": "Answer",
    "type": "string"
    },
    "created_by": {
    "title": "Created By",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "HTTPValidationError": {
    "title": "HTTPValidationError",
    "type": "object",
    "properties": {
    "detail": {
    "title": "Detail",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/ValidationError"
    }
    }
    }
    },
    "Organization": {
    "title": "Organization",
    "required": [
    "mission",
    "vision",
    "name",
    "values",
    "id",
    "creator",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "mission": {
    "title": "Mission",
    "type": "string"
    },
    "vision": {
    "title": "Vision",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "values": {
    "title": "Values",
    "type": "array",
    "items": {}
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "creator": {
    "title": "Creator",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "OrganizationCreate": {
    "title": "OrganizationCreate",
    "required": [
    "mission",
    "vision",
    "name",
    "values"
    ],
    "type": "object",
    "properties": {
    "mission": {
    "title": "Mission",
    "type": "string"
    },
    "vision": {
    "title": "Vision",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "values": {
    "title": "Values",
    "type": "array",
    "items": {}
    }
    }
    },
    "State": {
    "title": "State",
    "required": [
    "name",
    "state_code"
    ],
    "type": "object",
    "properties": {
    "name": {
    "title": "Name",
    "type": "string"
    },
    "state_code": {
    "title": "State Code",
    "type": "string"
    }
    }
    },
    "Ticket": {
    "title": "Ticket",
    "required": [
    "title",
    "issue"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "issue": {
    "title": "Issue",
    "type": "string"
    }
    }
    },
    "TicketCloseRes": {
    "title": "TicketCloseRes",
    "required": [
    "message"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    }
    }
    },
    "TicketInDB": {
    "title": "TicketInDB",
    "required": [
    "title",
    "issue",
    "opened_by",
    "short_id",
    "closed",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "issue": {
    "title": "Issue",
    "type": "string"
    },
    "opened_by": {
    "title": "Opened By",
    "type": "string"
    },
    "short_id": {
    "title": "Short Id",
    "type": "string"
    },
    "closed": {
    "title": "Closed",
    "type": "boolean"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "TicketReply": {
    "title": "TicketReply",
    "required": [
    "reply"
    ],
    "type": "object",
    "properties": {
    "reply": {
    "title": "Reply",
    "type": "string"
    }
    }
    },
    "TicketReplyInDB": {
    "title": "TicketReplyInDB",
    "required": [
    "reply",
    "reply_by",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "reply": {
    "title": "Reply",
    "type": "string"
    },
    "reply_by": {
    "title": "Reply By",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "TicketReplyRes": {
    "title": "TicketReplyRes",
    "required": [
    "message",
    "reply"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    },
    "reply": {
    "$ref": "#/components/schemas/TicketReply"
    }
    }
    },
    "User": {
    "title": "User",
    "required": [
    "email",
    "id",
    "first_name",
    "last_name",
    "phone_number",
    "is_active",
    "is_verified",
    "is_superuser",
    "organization"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "is_active": {
    "title": "Is Active",
    "type": "boolean"
    },
    "is_verified": {
    "title": "Is Verified",
    "type": "boolean"
    },
    "is_superuser": {
    "title": "Is Superuser",
    "type": "boolean"
    },
    "organization": {
    "title": "Organization",
    "type": "string"
    }
    }
    },
    "UserCodeVerification": {
    "title": "UserCodeVerification",
    "required": [
    "email"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "code_length": {
    "title": "This is the length of the verification code, which is 6 by default",
    "type": "integer",
    "example": 5
    }
    }
    },
    "UserCreate": {
    "title": "UserCreate",
    "required": [
    "email",
    "password",
    "first_name",
    "last_name",
    "verification_method"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "password": {
    "title": "Password",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "verification_method": {
    "title": "The user verification method you prefer, this is either: token or code",
    "type": "string",
    "example": "code"
    },
    "verification_redirect_url": {
    "title": "This is the redirect url if you are chosing token verification method",
    "type": "string",
    "example": "https://bigfastapi.com/verify"
    },
    "verification_code_length": {
    "title": "This is the length of the verification code, which is 6 by default",
    "type": "integer",
    "example": 5
    }
    }
    },
    "UserLogin": {
    "title": "UserLogin",
    "required": [
    "email",
    "password"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "password": {
    "title": "Password",
    "type": "string"
    }
    }
    },
    "UserOrgLogin": {
    "title": "UserOrgLogin",
    "required": [
    "email",
    "password",
    "organization"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "password": {
    "title": "Password",
    "type": "string"
    },
    "organization": {
    "title": "Organization",
    "type": "string"
    }
    }
    },
    "UserPasswordUpdate": {
    "title": "UserPasswordUpdate",
    "required": [
    "password"
    ],
    "type": "object",
    "properties": {
    "password": {
    "title": "Password",
    "type": "string"
    }
    }
    },
    "UserTokenVerification": {
    "title": "UserTokenVerification",
    "required": [
    "email",
    "redirect_url"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "redirect_url": {
    "title": "Redirect Url",
    "type": "string"
    }
    }
    },
    "UserUpdate": {
    "title": "UserUpdate",
    "required": [
    "email",
    "first_name",
    "last_name",
    "phone_number",
    "organization"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "organization": {
    "title": "Organization",
    "type": "string"
    }
    }
    },
    "ValidationError": {
    "title": "ValidationError",
    "required": [
    "loc",
    "msg",
    "type"
    ],
    "type": "object",
    "properties": {
    "loc": {
    "title": "Location",
    "type": "array",
    "items": {
    "type": "string"
    }
    },
    "msg": {
    "title": "Message",
    "type": "string"
    },
    "type": {
    "title": "Error Type",
    "type": "string"
    }
    }
    }
    },
    "securitySchemes": {
    "HTTPBearer": {
    "type": "http",
    "scheme": "bearer"
    }
    }
    }
    }