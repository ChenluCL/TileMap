class TileNode {
		  x: number;
		  y: number;
		  f: number;
		  g: number;
		  h: number;

		  runable: Boolean = true;
		  parent: TileNode;


	// bitmap: egret.Bitmap = null;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

}