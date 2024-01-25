/**
 * загружает буфер
 * возвращает преобразованную из буфера строку
 * @class
 */
export default class ArrayBufferConverter {
  /**
   * загружает и сохраняет буфер данных
   * @param {buffer} buffer буфер данных
   */
  load(buffer) {
    this.buffer = buffer;
  }

  /**
   * возвращает преобразованную из буфера строку
   * @returns {String}
   */
  toString() {
    return String.fromCharCode(...new Uint16Array(this.buffer));
  }
}
