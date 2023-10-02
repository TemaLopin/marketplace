'use client'

import styled from 'styled-components'
import { USER_FIELDS, UserFieldPropsT } from '../page'
import { LegacyRef, useRef, useState } from 'react'
import { COLORS } from '@/constants/colors'
import { useAppSelector } from '@/components/hook/redux'

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;

  margin-bottom: 10px;

  input {
    font-style: italic;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #0004;
    width: 80%;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 40%;
  column-gap: 10%;

  box-shadow: 3px 4px 8px #0004;
  border: 1px solid #0004;
  border-radius: 10px;
  /* padding: 5px 10px 10px 5px; */
  padding: 10px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

const ProfileImage = styled.img`
  vertical-align: middle;
  width: 200px;
  height: 200px;

  border-radius: 4px;
`

const DragAndDrop = styled.div`
  min-width: 200px;
  height: 200px;

  margin-left: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border: 1px dashed #0004;
  border-radius: 4px;

  button {
    margin-top: 10px;
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.4s;
  }
  button:hover {
    background-color: ${COLORS.orange};
    color: #fff;
  }
  p {
    word-break: keep-all;
  }
  span {
    margin-top: 10px;
  }
`

const Block = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 1000px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`

const ImageEditor = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const photo =
    'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'

  const setNewImage = (files: FileList) => {
    if (files.length === 0) return

    const format = files[0].name.slice(-3)
    if (format !== 'jpg' && format !== 'png') return

    if (imageRef.current === null) return
    const url = URL.createObjectURL(files[0])

    let img = new Image()
    img.onload = () => URL.revokeObjectURL(url)

    imageRef.current.src = url
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    const files = e.dataTransfer.files
    setNewImage(files)
  }
  const handleSelect = () => {
    if (inputRef.current === null) return
    inputRef.current?.click()
  }

  return (
    <Block>
      <ProfileImage ref={imageRef} alt={'photo profile'} src={photo} />
      <DragAndDrop onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <p>Drag and Drop file to upload</p>
        <span>or</span>
        <input
          hidden
          type='file'
          ref={inputRef}
          onChange={({ target: { files } }) =>
            files !== null && setNewImage(files)
          }
        />
        <button onClick={handleSelect}>Select file</button>
      </DragAndDrop>
    </Block>
  )
}

type EditableUserFieldProps = UserFieldPropsT & {
  callback: (data: { value: string }) => void
}
const EditableField = ({ field, value, callback }: EditableUserFieldProps) => {
  return (
    <FieldContainer>
      <p>{field}</p>
      <input
        value={value}
        onChange={({ target: { value: newValue } }) =>
          callback({ value: newValue })
        }
      />
    </FieldContainer>
  )
}

const Settings = () => {
  const { user: userRedux } = useAppSelector((state) => state.user)
  const [user, setUser] = useState<any>(userRedux)
  console.log('🚀 !@#$ user:', user)

  return (
    <Container>
      <ImageEditor />
      <div data-animch='3'>
        {USER_FIELDS.map(({ name, path }) => (
          <EditableField
            callback={({ value }) => setUser({ ...user, [path]: value })}
            field={name}
            value={user[path]}
          />
        ))}
      </div>
    </Container>
  )
}

export default Settings
