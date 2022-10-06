import React, { Fragment, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Code from '@tiptap/extension-code'
import TaskList from '@tiptap/extension-task-list'
import { MdTextFields } from 'react-icons/md'
import { Listbox } from '@headlessui/react'
import { BiAlignLeft, BiAlignMiddle, BiAlignJustify, BiAlignRight, BiLeftIndent, BiRightIndent, BiCodeBlock, BiBold } from 'react-icons/bi'
import { AiOutlineUnorderedList, AiOutlineOrderedList } from 'react-icons/ai'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import { FiCode } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import { BsListTask } from 'react-icons/bs'
import TaskItem from '@tiptap/extension-task-item'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import BubbleMenu from '@tiptap/extension-bubble-menu'


const Sidebar = ({ editor }) => {
  return(
          <div className='h-full fixed'>
              <div className='width-30 height-70 flex flex-col items-center justify-center'>
                <div className='mb-4'>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <BiAlignLeft size={30}/>
                    </i>
                  </button>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <BiAlignMiddle size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <BiAlignJustify size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <BiAlignRight size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                </div>

                <div className='mb-4'>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <AiOutlineUnorderedList size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <AiOutlineOrderedList size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <BsListTask size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                </div>

                <div className='mb-4'>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <FaQuoteLeft size={27} style={{color: 'white'}}/>
                    </i>
                  </button>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <FiCode size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                  <button className='mr-3 text-white hover:text-onyx hover:p-2 hover:bg-ivory transition rounded-md'>
                    <i>
                      <BiCodeBlock size={30} style={{color: 'white'}}/>
                    </i>
                  </button>
                </div>
              </div>  



              <div className='border border-t-ivory border-l-0 border-b-0 p-4'>
                <span className='text-lg bold mb-3'>Title</span>
                <input type="text" className='border border-black outline-none p-1 rounded-lg mb-3'/>
                <span className='text-lg bold mb-3'>Description</span>
                <textarea name="" id="" className='border border-black outline-none p-2 rounded-lg'></textarea>
              </div>
            </div>
  )
}


const Unique = () => {
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
            BubbleMenu.configure({
              tippyOptions: {
                placement: "auto"
              }
            })
        ],
        content: '<p>Text Here...</p>'
    })

  return (
    <>
      {/* Header */}
        <div className='p-4 bg-bar-gray flex justify-center items-center'> 
          <button className='mr-4'>Button</button>
          <button className='mr-4'>Button</button>
          <button className='mr-4'>Button</button>
        </div>

        {/* Body */}
        <div className='flex bg-ivory'>
          {/* Editor Content */}
          <div className='new-container mt-9 width-70 '>
            <EditorContent editor={editor} />
          </div>
          {/* Sidebar */}
          <div className='width-30 border bg-onyx'>
            <Sidebar editor={editor} />
          </div> 
        </div>
    </>
  )
}

export default Unique