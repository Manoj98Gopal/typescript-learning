type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// this is intersection
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
};
