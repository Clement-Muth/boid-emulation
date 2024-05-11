import type View from "../../library/components/containers/view";

/**
 * Represents a flock of boids.
 */
export default class Boid implements View {
  public lastDx: number;
  public lastDy: number;

  constructor(
    public x: number,
    public y: number,
    public dx: number,
    public dy: number,
    public speed: number,
    private color: string,
  ) {
    this.lastDx = dx;
    this.lastDy = dy;
  }

  /**
   * The update function adjusts the position of an object based on its speed and
   * direction, ensuring it stays within the specified width and height boundaries.
   * @param {number} width - The `width` parameter represents the width of the area
   * within which the object is moving. It is used to determine the boundaries for
   * the object's movement along the horizontal axis.
   * @param {number} height - The `height` parameter represents the vertical
   * dimension of the area within which the object is moving. It is used in the
   * `update` method to determine if the object has reached the top or bottom
   * boundaries of the area. If the object's `y` position exceeds the `height` or
   * goes below
   */
  public update(width: number, height: number): void {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    if (this.x > width || this.x < 0) {
      this.dx = -this.dx;
      this.x = Math.min(Math.max(this.x, 0), width);
    }

    if (this.y > height || this.y < 0) {
      this.dy = -this.dy;
      this.y = Math.min(Math.max(this.y, 0), height);
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - 5);
    ctx.lineTo(this.x - 5, this.y + 5);
    ctx.lineTo(this.x + 5, this.y + 5);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
