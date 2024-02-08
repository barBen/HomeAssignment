# Canvas Rendering Home Assignment

## Assignment Overview

- Please dedicate no more than 2 hours for the whole assignment.
- If you have questions, please reach out to Noam (052-459-4272)
- Strive to minimize coupling between components, keeping the code as modular as possible.
- Prioritize non-blocking code where feasible to enhance performance.
- Take pride in the code's readability and maintainability, ensuring it's easy to discuss and understand.
 
In this task, you will be responsible for creating both the server and client components. The server should generate a stream of data to be rendered, based on the included JSON files. The data files contain messages with coordinates for a rectangle and a point, along with a timestamp. These timestamps indicate when the server should send each message to the client.

## Assignment Task

1. **Server Creation**: You need to develop the server component. This server will read the JSON files and create a data stream that will be sent to the client as the timeline progresses. In other words, the server generates rendering updates and sends them to the client in sync with the provided timestamps.

2. **Client Rendering**: The client's responsibility is to draw both the rectangle and the point on the canvas. These shapes should remain on the screen until new rendering data is received. Each shape should be labelled with its corresponding timestamp. Additionally, the following color-coding rules should be applied to the rectangle based on the point's location:

   - If the point is inside the rectangle, the rectangle should be coloured green.
   - If the point is outside the rectangle, the rectangle should be coloured red.

### Bonus Task

Under the "3D" directory you will find JSON files for 3D rendering, which extend the task to include an extra dimension on the client side.

## Submission

After 2 hours, please send us a ZIP file containing all the code files you created. Additionally, include short and clear instructions on how to run your application. This should help us review your work effectively and understand your solution.

Good luck!
