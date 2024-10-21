import { ImageEditor } from "./image-editor";
import { ImageEditorBackupManager } from "./image-editor-backup-manager";

const imageEditor = new ImageEditor("/media/image.png", "png");

const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormartTo("gif");

backupManager.backup();
imageEditor.convertFormartTo("bmp");

backupManager.backup();
imageEditor.convertFormartTo("jpg");

console.log(imageEditor);

backupManager.undo();

console.log(imageEditor);

backupManager.undo();

console.log(imageEditor);

backupManager.undo();

console.log(imageEditor);
