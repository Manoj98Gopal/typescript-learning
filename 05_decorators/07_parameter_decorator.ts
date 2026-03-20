type WatchParameters = {
  methodName: string;
  parameterIndex: number;
};

let watchedParameters: WatchParameters[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);
