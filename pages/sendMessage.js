import liff from "@line/liff";

export async function sendMessage() {
  if (liff.isInClient()) {
    await liff.sendMessages([
      {
        type: 'text',
        text: 'Hello, this is a message from LIFF app!'
      }
    ]);
    alert('Message sent');
  } else {
    alert('This function is only available in the LINE app.');
  }
}