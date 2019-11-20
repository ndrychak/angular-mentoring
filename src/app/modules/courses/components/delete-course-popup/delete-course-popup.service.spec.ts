import { DeleteCoursePopupComponent } from './delete-course-popup.component';

describe('DeleteCoursePopupComponent', () => {
  let sut;
  let dialogRef;
  let MAT_DIALOG_DATA;

  const courseId = 3;

  beforeEach(() => {
    dialogRef = {
      close: jasmine.createSpy('close')
    };

    MAT_DIALOG_DATA = {
      title: 'test',
      id: courseId
    };

    sut = new DeleteCoursePopupComponent(dialogRef, MAT_DIALOG_DATA);
  });

  describe('#close', () => {
    it('should close popup', () => {
      sut.close();

      expect(dialogRef.close).toHaveBeenCalled();
    });
  });

  describe('#delete', () => {
    it('should close popup and send course id', () => {
      sut.delete();

      expect(dialogRef.close).toHaveBeenCalledWith({
        deleteCourseId: courseId
      });
    });
  });
});

