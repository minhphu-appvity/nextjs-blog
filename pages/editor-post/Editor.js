import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const Editor = (props) => {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('../../ckeditor5-build-with-htmlembed-master/build/ckeditor')
    }
    setEditorLoaded(true)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Ckeditor TMP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Ckeditor5 Nextjs</h1>
      {
        editorLoaded ?
          <CKEditor onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
            config={{
              ckfinder: {
                // Upload the images to the server using the CKFinder QuickUpload command.
                uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
              }
            }}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            className="mt-3 wrap-ckeditor" editor={ClassicEditor} />
          :
          "loading..."
      }
    </div>
  )
}

export default Editor;