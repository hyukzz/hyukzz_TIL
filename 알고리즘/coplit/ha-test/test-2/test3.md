## 문제

간선들의 목록들을 받아 2차원 배열의 무향 그래프 매트릭스를 출력하는 함수를 작성해야 합니다. 입력값은 모두 2차원 배열이며, 배열의 인덱스를 그래프의 버텍스로 간주합니다.
첫 번째 입력값은 만드려는 매트릭스의 간선을 나타내었고, 두 번째 입력값은 삭제하려는 간선을 나타냅니다.

## 조건

각 간선은 2가지 정보를 담고 있습니다.

0번째: 간선의 시작 정점 (0 이상의 정수)
1번째: 간선의 도착 정점 (0 이상의 정수)

## 출력

2차원 배열의 무향 그래프를 출력하는 함수를 리턴해야 합니다.

## 주의 사항

두 번째 입력값의 삭제하려는 간선이 첫 번째 입력값에 없다면 무시합니다.
두 번째 입력값의 최대 버텍스는 첫 번째 입력값의 최대 버텍스와 동일합니다.
정점 0에서 정점 4로 이어주는 간선이 존재할 경우 정점 1, 2, 3도 존재합니다.
출력하는 버텍스의 개수는 입력값의 최대 버텍스 값을 초과하지 않습니다. (예: insertEdges의 최대 버텍스가 3이라면, 최대 크기가 3인 그래프입니다.)
반환하는 인접행렬은 2차원 배열이며, 행(row)는 바깥 배열, 열(column)은 안쪽 배열입니다.

let matrix = [[0, 0], [0, 0]]
matrix[0] === 0번째 행
matrix[0][0] === 0번째 행의 0번째 열
두 정점간의 간선의 유무는 0과 1로 표시합니다.

0: 두 정점간에 간선이 존재하지 않을 경우
1: 두 정점간에 간선이 존재할 경우
아래의 2차원 배열에서 세로축은 시작 정점, 가로축은 도착 정점입니다.
// matrix 예시
const matrix = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
];

## 입출력 예시

const insertEdges = [
[0, 3],
[0, 2],
[1, 3],
[2, 1],
];
const removeEdges = [[1, 3], [1, 0]];
let output1 = test3(insertEdges, removeEdges);

console.log(output1);
/\*\*

- [
- [0, 0, 1, 1],
- [0, 0, 1, 0],
- [1, 1, 0, 0],
- [1, 0, 0, 0]
- ]
  \*/

const insertEdges2 = [
[0, 2],
[2, 4],
[1, 3],
[2, 1],
];
const removeEdges2 = [
[0, 3],
[2, 1],
[1, 0],
[4, 2]
];

let output2 = test3(insertEdges2, removeEdges2);

console.log(output2);
/\*\*

- [
- [0, 0, 1, 0, 0],
- [0, 0, 0, 1, 0],
- [1, 0, 0, 0, 0],
- [0, 1, 0, 0, 0],
- [0, 0, 0, 0, 0],
- ]
  \*/

## 소스코드

```
class GraphWithAdjacencyMatrix {
	constructor() {
		this.matrix = [];
	}

	addVertex() {
		for (let i = 0; i < this.matrix.length; i++) {
			this.matrix[i].push(0);
		}
		this.matrix.push(new Array(this.matrix.length + 1).fill(0));
	}

	addEdge(from, to) {
      this.matrix[from][to] = 1;
      this.matrix[to][from] = 1;
	}

	hasEdge(from, to) {
    if(this.matrix[from][to] === 1) return true;
    return false;
	}

	removeEdge(from, to) {
      this.matrix[from][to] = 0;
      this.matrix[to][from] = 0;
	}
}

function test3(insertEdges, removeEdges) {
  const adjacencyMatrix = new GraphWithAdjacencyMatrix();

  for (let i = 0; i <= vertexCnt(insertEdges); i++) {
    adjacencyMatrix.addVertex()
  }

  insertEdges.forEach((arr) => adjacencyMatrix.addEdge(arr[0], arr[1]))
  removeEdges.forEach((arr) => adjacencyMatrix.removeEdge(arr[0], arr[1]))

  return adjacencyMatrix.matrix
}

const vertexCnt = (edge) => {
  let max = 0;

  edge.forEach((arr) => {
    arr.forEach((n) => {
      if (max < n) {
        max = n
      }
    })
  })

  return max
}
```
