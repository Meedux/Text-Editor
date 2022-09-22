import React, { Fragment, useState } from 'react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Code from '@tiptap/extension-code'
import TaskList from '@tiptap/extension-task-list'
import { MdTextFields } from 'react-icons/md'
import { BiAlignLeft, BiAlignMiddle, BiAlignJustify, BiAlignRight, BiCodeBlock } from 'react-icons/bi'
import { AiOutlineUnorderedList, AiOutlineOrderedList } from 'react-icons/ai'
import { FiCode } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import { BsListTask } from 'react-icons/bs'
import TaskItem from '@tiptap/extension-task-item'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'

const TypographyDropdown = ({ editor, setActive, isActive }) => {
    return (
        <Menu>
          <Menu.Button onClick={() => {setActive(!isActive)}}>
            <MdTextFields size={25} />
          </Menu.Button>
          <Menu.Items as='div' className='relative '>
            <Menu.Item as='span'>
              {({ active }) => (
                <button 
                  className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('heading', { level: 1 }) && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  style={{transition: '300ms'}}
                >
                  H1
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('heading', { level: 2 }) && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  style={{transition: '300ms'}}
                >
                  H2
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('heading', { level: 3 }) && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
                  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                  style={{transition: '300ms'}}
                >
                  H3
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('bold') && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  style={{transition: '300ms'}}
                >
                  Bold
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('italic') && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  style={{transition: '300ms'}}
                >
                  Italic
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      )
}


const MenuBar = ({ editor }) => {
    const [ isActive, setActive ] = useState(false)

    return (
      <div className='h-full'>
        <div className='bg-bar-gray p-3 w-full'>
          <div className='flex justify-center items-end flex-wrap'>
            <button className={`${!isActive ? 'btn-active' : 'btn'}`}>
              <TypographyDropdown editor={editor} setActive={setActive} isActive={isActive}/>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              // className={editor.isActive({ textAlign: 'left' }) ? 'btn-active' : 'btn'}
              className='btn'
            >
              <i>
                <BiAlignLeft size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              // className={editor.isActive({ textAlign: 'center' }) ? 'btn-active' : 'btn'}
              className='btn'
            >
              <i>
                <BiAlignMiddle size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              // className={editor.isActive({ textAlign: 'justify' }) ? 'btn-active' : 'btn'}
              className='btn'
            >
              <i>
                <BiAlignJustify size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className='btn'
            >
              <i>
                <BiAlignRight size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className='btn'
            >
              <AiOutlineUnorderedList size={25} />
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className='btn'
            >
              <AiOutlineOrderedList size={25} />
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className='btn'
            >
              <BsListTask size={25} />
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleCode().run()}
              className='btn'
            >
              <FiCode size={25} />
            </button> 
            
            <button 
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className='btn'
            >
              <BiCodeBlock size={25} />
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className='btn'
            >
              <FaQuoteLeft size={25} />
            </button>
          </div>
        </div>
      </div>
    )
}

const Minified = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Code.configure({
                HTMLAttributes: {
                class: 'code',
                },
            }),
            TaskList,
            CodeBlock.configure({
                class: 'block',
            }),
            TaskItem,
            ListItem,
            Blockquote,
            BulletList,
            OrderedList,
            BubbleMenu
        ],
        content: '<p>Text Here...</p>'
    })
  return (
    <>
      <div className='container mx-auto'>
        <div className='mb-5'>
          <input type="text" placeholder='Title...' className='font-bold bg-input-gray p-4' style={{outline: 'none', width: '100%'}}/>
        </div>
        {
            editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <MenuBar editor={editor} />
            </BubbleMenu>
        }

        <EditorContent editor={editor}/>
      </div>
    </>
  )
}

export default Minified