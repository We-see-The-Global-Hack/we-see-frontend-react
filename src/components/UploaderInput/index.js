// react
import React, { useCallback, useState } from "react";
import {Avatar} from "@material-ui/core";
// hooks
import useFirebase from "hooks/useFirebase";
import useAuth from "hooks/useAuth";

const InputUploader = ({ field, name, options, form, ...props }) => {
  const [uri, setUri] = useState("")

  const firebase = useFirebase();
  const { user } = useAuth();

  const handleFileUploadChange = useCallback(
    async e => {
      const selectedFile = e.target.files[0];
      if (firebase) {
        const storage = firebase.storage();
        const storageRef = storage.ref(
          `${user.id}/${new Date().toISOString().slice(0, -5)}_${
            selectedFile.name
          }`
        );

        const downloadedFile = await storageRef.put(selectedFile);
        const uri = await downloadedFile.ref.getDownloadURL();

        setUri(uri)
        form.setFieldValue(field.name, uri);
      }
    },
    [user]
  );

  if(uri) return <Avatar src={uri} style={{height: 200, width: 200}} />

  return <input onChange={handleFileUploadChange} type="file" />;
};

export default InputUploader;
