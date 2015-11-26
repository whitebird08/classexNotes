var RemoveDuplicates = require('./remove_dups');

describe('Remove duplicates', function () {
  it('should initialize a string', function () {
    var remove_duplicates = new RemoveDuplicates('AbBbCc');
    expect(remove_duplicates.string).toEqual('AbBbCc');
    // var remove_duplicates2 = new RemoveDuplicates('AbBbCcF');
    //  expect(remove_duplicates2.string).toEqual('AbBbCcF');
  });

  describe('insensitive on string:', function () {
    it('AABB should return: AB', function () {
      var remove_duplicates = new RemoveDuplicates('AABB');
      expect(remove_duplicates.insensitiveRemoveDupes()).toEqual('AB');
    });

    it('AaAaBbBb should return: AB', function () {
      var remove_duplicates = new RemoveDuplicates('AaAaBbBb');
      expect(remove_duplicates.insensitiveRemoveDupes()).toEqual('AB');
    });

    it('cAtCaT should return: cAt', function () {
      var remove_duplicates = new RemoveDuplicates('cAtCaT');
      expect(remove_duplicates.insensitiveRemoveDupes()).toEqual('cAt');
    });
  });

  describe('sensitive on string:', function () {
    it('AABB should return: AB', function () {
      var remove_duplicates = new RemoveDuplicates('AABB');
      expect(remove_duplicates.removeDupes()).toEqual('AB');
    });

    it('AaAaBbBb should return: AaBb', function () {
      var remove_duplicates = new RemoveDuplicates('AaAaBbBb');
      expect(remove_duplicates.removeDupes()).toEqual('AaBb');
    });

    it('cAtCaT should return: cAtCaT', function () {
      var remove_duplicates = new RemoveDuplicates('cAtCaT');
      expect(remove_duplicates.removeDupes()).toEqual('cAtCaT');
    });
  });
});