const InvatiantError = require('../../exceptions/InvatiantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvatiantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
