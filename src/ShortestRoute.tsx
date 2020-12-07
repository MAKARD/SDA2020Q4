export interface Algorithm {

}

export class ShortestRoute {
  private algorithm: Algorithm;

  constructor(algorithm: Algorithm) {
    this.algorithm = algorithm;
  }
}